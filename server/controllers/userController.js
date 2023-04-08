const UserModel = require('../models/userModel');
const { createUser, findUser } = require('../models/userModel');
const { generateToken, verifyToken } = require('../utils/jwtUtil');
const { createPwdHash, verifyPassword } = require("../utils/passwordUtils");
const { errorCreator, responseCreator } = require('../utils/responseHandler');

const signup = async (req, res, next) => {
    try {
        const userData = req.body;
        const { password } = userData;
        const pwdHash = await createPwdHash(password);
        userData.password = pwdHash;
        const data = await createUser(userData);
        if (data) {
            res.send({ success: true, message: 'Account created Successfully!!!' });
        }
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { password: pwdHash, ...user } = await findUser(username);
        if (await (verifyPassword(password, pwdHash))) {
            const token = generateToken(user);
            console.log({ token }, "user controller");
            res.send({
                success: true, message: `${username} loggedin successfully`,
                data: { ...user, token }
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
        console.log(req.headers);
        const { authorization = null } = req.headers;
        if (!authorization) {
            console.log(errorCreator);
            errorCreator('Token missing!!!', 403);
        }
        const [, token] = authorization.split('Bearer ');
        const {username} = verifyToken(token);
        console.log({username});
        // check if user exists in db;
        const {password,...userData} = await UserModel.findUser(username);

        res.status(200).send(responseCreator('user autenticated with token', userData));
    } catch (error) {
        next(error)
    }
}


module.exports = { signup, login, authMiddleware };