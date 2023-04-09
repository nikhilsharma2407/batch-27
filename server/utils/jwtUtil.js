const { sign, verify, decode } = require("jsonwebtoken");
const { errorCreator } = require("./responseHandler");

const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (data) => {
    console.log({data});
    const token = sign(data, SECRET_KEY, { expiresIn: "1h" })
    console.log({token});
    return token
};

const verifyToken = (token)=>{
        console.log(token);
        if(!token){
            errorCreator('Token missing, Please login again to continue',401);
        }
        const verified = verify(token,SECRET_KEY);
        console.log(verified);
        return verified
}

module.exports = {generateToken,verifyToken}
