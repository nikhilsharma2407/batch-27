const {createUser,findUser} = require('../models/userModel');
// const {createPasswordHash,verifyPasswordHash} = require("../utils/passwordUtils");

const signup = async (req, res, next) => {
    try {
        const userData = req.body;
        if(findUser(userData.username)){
            const pwdHash = createPasswordHash(userData.password);
            userData.password = pwdHash;
            const err = new Error("UserId already exists");
            err.status = 403;
            throw err
        }else{
            const data = createUser(userData);
            if(data.insertedCount){
                res.send({success:true,message:'Account created Successfully!!!'});
            }
        }
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    //login Logic
}


module.exports = { signup, login };