const jwt = require("jsonwebtoken")

const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) return res.status(403).json({ msg: 'Not authorized.' })

        jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
            if (error) return res.status(403).json({ msg: 'Wrong or expired token' })
            else{
                req.user = data;
                next();
            }
        })
    } catch (error) {
        return res.status(403).json({ msg: 'Not authorized.' })
    }
}
module.exports = verifyUser;