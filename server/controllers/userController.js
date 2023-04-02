const { createUser, findUser } = require('../models/userModel');
const {createPwdHash,verifyPassword} = require("../utils/passwordUtils");

const signup = async (req, res, next) => {
    try {
        const userData = req.body;
        const {password} = userData;
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
        const {username,password} = req.body;
        const user = await findUser(username);
        const pwdHash = user.password;
        if(await (verifyPassword(password,pwdHash))){
            res.send({ success: true, message: `${username} loggedin successfully`,data:user });
        }else{
            const err = new Error('Incorrect Password!!!');
            err.status = 401;
            throw err;
        }
    } catch (error) {
        next(error)
    }
}


module.exports = { signup, login };