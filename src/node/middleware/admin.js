const { func } = require("joi");

function admin (req, res, next) {
    // 401 , Unauth
    //403 / forbidden 
if (!req.user.isAdmin) res.status(403) // Forbidden
next()    
}

module.exports = admin;

