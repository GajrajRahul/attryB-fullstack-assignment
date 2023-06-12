const jwt = require('jsonwebtoken');
const JWT_SECRET = "ThisIsJWT_SecretKey";

module.exports = async (req, res, next) => {
   try {
      const token = req.headers['authorization'].split(" ")[1];
      jwt.verify(token, JWT_SECRET, (err, decode) => {
         if (err) {
            return res.status(200).send({
               message: `Auth Failed`,
               success: false
            })
         } else {
            req.body.userId = decode.id;
            next();
         }
      })
   } catch (error) {
      console.log(error);
      res.status(401).send({
         message: 'Auth Failed',
         success: false
      })
   }
}