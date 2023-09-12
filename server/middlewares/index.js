const ObjectId = require("mongoose").Types.ObjectId;

const validateDbId = (req, res, next) => {
  if (ObjectId.isValid(req.params.id) == false) {
    res.status(400).json({ error: "Giver id is not valid " });
  } else {
    next();
  }
};

module.exports = {
  validateDbId,
};
