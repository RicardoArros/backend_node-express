const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const getProperties = require('./handlePropertiesEngine');

const propertiesKey = getProperties();

/**
 *
 * @param {*} user
 * @returns
 */
const tokenSign = async (user) => {
  return jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

const decodeSign = (token) => {
  return jwt.decode(token, null);
};

module.exports = { tokenSign, decodeSign, verifyToken };
