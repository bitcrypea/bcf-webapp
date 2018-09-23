import jwt from 'jsonwebtoken'

const authTokenFromStorage = () => {
  const tokenId = localStorage.getItem('TOKEN_ID');
  const tokenSecret = localStorage.getItem('TOKEN_SECRET');

  var payload = {
    sub: tokenId,
    jti: Date.now(),
  };

  var token = jwt.sign(payload, tokenSecret);
  return token;
};

export { authTokenFromStorage };
