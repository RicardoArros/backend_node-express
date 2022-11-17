const { verifyToken } = require('../utils/handleToken');

const {
  handleErrorResponse,
  handleHttpError,
} = require('../utils/handleError');

//
const getProperties = require('../utils/handlePropertiesEngine');

const propertiesKey = getProperties();

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleErrorResponse(res, 'NOT_ALLOW', 409);

      return;
    }

    const token = req.headers.authorization.split(' ').pop();

    const tokenData = await verifyToken(token);

    if (!tokenData) {
      handleHttpError(res, 'NOT_PAYLOAD_DATA', 401);

      return;
    }

    const query = {
      [propertiesKey.id]: tokenData[propertiesKey.id]
    };

    const user = await usersModel.findOne(query);
    req.user = user;

    next();

  } catch (e) {
    handleHttpError(res, 'NOT_SESSION', 401);
  }
};

module.exports = checkAuth;
