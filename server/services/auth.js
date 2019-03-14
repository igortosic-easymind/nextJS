const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;


//MIDDLEWERE
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 50, // Default value
        jwksUri: 'https://easymind.eu.auth0.com/.well-known/jwks.json'
      }),

    audience: 'xuHMIJlU66cPNBfPmyOMkuziyCBXmAB9',
    issuer: 'https://easymind.eu.auth0.com/',
    algoritms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
    const user = req.user;
  
    if (user && user[NAMESPACE + '/role'] && (user[NAMESPACE + '/role'] === role)) {
      next();
    } else {
      return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
    }
  }