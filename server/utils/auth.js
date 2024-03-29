const jwt = require('jsonwebtoken');

//the secret could be in the .env file I believe
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
   
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      console.log(req.user)
      
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, _id}) {
    const payload = { username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  generateToken: function (user){
    const expiresIn = '1h';

    const secret = 'my-secret-key';

    const payload = {
      userId: user.id,
      username: user.name,
    };
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
  }
};