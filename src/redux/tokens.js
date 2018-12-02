import jwt from 'jsonwebtoken';

const authTokenFromStorage = () => {
  const tokenId = localStorage.getItem('TOKEN_ID');
  const tokenSecret = localStorage.getItem('TOKEN_SECRET');

  if (tokenId !== null && tokenSecret !== null) {
    localStorage.setItem('now', Date.now())
    var payload = {
      sub: tokenId,
      jti: Date.now()
    };
    var token = jwt.sign(payload, tokenSecret);
    return token;
  }

  return null;
};

export { authTokenFromStorage };
