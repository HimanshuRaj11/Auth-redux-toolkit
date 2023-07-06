const jwt = require("jsonwebtoken");

const generateToken = async(payload)=>{
    const Token = await jwt.sign(payload, process.env.JWT_SECRET);
    return Token;
}

module.exports = generateToken