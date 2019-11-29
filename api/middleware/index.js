const { verifyJWT } = require("../libs/auth");

// JWT verification middleware
const handleVerifyJWT = (req, res, next) => {
    const token = req.get("authToken");
    verifyJWT(token)
    .then(content => {
        req.user = content;
        next();
    })
    .catch(error => {
        res.status(400).send(error);
    })
}

module.exports = {
    handleVerifyJWT
}