const jwt = require('jsonwebtoken');
const config = require('config')

function authenticator (req, res, next) {
   const token = req.header("x-auth-reg-token")
   if(!token) return res.status(401).send("Access Deined , you are not the owner of platform");
  
  try {
    const decodedPayload = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decodedPayload;
    next();
      
  } 
  catch (ex) {
      res.status(400).send('Invalid Token');
  }
    
}

module.exports = authenticator