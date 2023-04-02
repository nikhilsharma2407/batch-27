const { genSalt, hash, compare } = require("bcrypt");

const createPwdHash = async(password)=>{
    const salt = await genSalt();
    const pwdHash = hash(password,salt);
    console.log(pwdHash);
    return pwdHash;
}

const verifyPassword = async (password,pwdHash)=>{
    const verified = await compare(password,pwdHash);
    console.log(verified);
    return verified;
}

module.exports = {createPwdHash,verifyPassword}