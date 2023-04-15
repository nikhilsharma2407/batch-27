const UserModel = require('../models/userModel');
const { createUser, findUser } = require('../models/userModel');
const { generateToken, verifyToken } = require('../utils/jwtUtil');
const { createPwdHash, verifyPassword } = require("../utils/passwordUtils");
const { errorCreator, responseCreator } = require('../utils/responseHandler');
const { generateQRCode, verifyOTP } = require('../utils/totpUtil');

const signup = async (req, res, next) => {
    try {
        const userData = req.body;
        const { password } = userData;
        const pwdHash = await createPwdHash(password);
        userData.password = pwdHash;

        const { secret, qrcode } = await generateQRCode();
        userData.secret = secret;
        const userCreatedData = await UserModel.createUser(userData);
        res.status(201);
        if (userCreatedData) {
            res.send(`
            <h1>user ${userData.username} created successfully!!!</h1>
            <h1>Two Factor authentication setup</h1>
            <h2>Please scan the QR code with Google Authenticator</h2>
            <img src="${qrcode}"/>`);
        }
    }
    catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { password: pwdHash,secret, ...user } = await findUser(username);
        if (await (verifyPassword(password, pwdHash))) {
            const token = generateToken(user);
            console.log({ token }, "user controller");
            res.cookie('token', token, { maxAge: 3600 * 1000, httpOnly: true });
            res.send({
                success: true, message: `${username} loggedin successfully`,
                data: user
            });
        } else {
            const err = new Error('Incorrect Password!!!');
            err.status = 401;
            throw err;
        }
    } catch (error) {
        next(error)
    }
}

const authMiddleware = async (req, res, next) => {
    try {
        // console.log(req.headers);
        // const { authorization = null } = req.headers;
        // if (!authorization) {
        //     console.log(errorCreator);
        //     errorCreator('Token missing!!!', 403);
        // }
        // const [, token] = authorization.split('Bearer ');
        const { token = null} = req.cookies;
        console.log('cookie', req.cookies);
        const { username } = verifyToken(token);
        console.log({ username });
        // check if user exists in db;
        const { password, ...userData } = await UserModel.findUser(username);
        // res.status(200).send(responseCreator('user autenticated with token', userData));
        res.locals.userData = userData;
        next();
    } catch (error) {
        next(error)
    }
}


const loginWithCookie = async (req, res, next) => {
    try {
        res.send(responseCreator("User authenticated with Cookie", res.locals.userData));
    } catch (error) {
        next(error);
    }
};


const resetPassword = async (req, res, next) => {
    try {
        const { username, password: pwd, otp } = req.body;
        const user = await UserModel.findUser(username);
        const { secret } = user;
        const isOTPvalid = verifyOTP(otp, secret);
        if (isOTPvalid) {
            const password = await createPwdHash(pwd);
            const userUpdated = await UserModel.updateUser(username, { password });
            if (userUpdated) {
                res.send(responseCreator(`Password updated successfully for ${username}`));
            } else {
                errorCreator("Something Went wrong!!!");
            }
        } else {
            errorCreator('Invalid OTP', 403);
        }
    } catch (error) {
        next(error);
    }
}


const addFriend = async (req, res, next) => {
    try {
        const { username } = res.locals.userData;
        console.log("username", "addFriend");
        const { id, name } = req.body;
        const data = await UserModel.updateFriend(username, id);
        if (data) {
            res.status(200);
            res.send(responseCreator(`You're now friends with ${name}`, data.friendList))
        }
    } catch (error) {
        next(error);
    }
};

const removeFriend = async (req, res, next) => {
    try {
        const { username } = res.locals.userData;
        const { id, name } = req.body;
        const data = await UserModel.updateFriend(username, id, false);
        if (data) {
            res.status(200);
            res.send(responseCreator(`You're no longer friends with ${name}`, data.friendList))
        }
    } catch (error) {
        next(error);
    }
};

const logout = async (req,res,next)=>{
    res.clearCookie('token');
    res.send(responseCreator("User logged out successfully!!!"))
}


module.exports = { signup, login, logout,authMiddleware, loginWithCookie, resetPassword, addFriend, removeFriend };