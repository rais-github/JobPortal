
const joiSchema = require('../JoiSchema');
const ExpressError = require('../utils/ExpressError');

const validateJob = (req, res, next) => {
    const { error } = joiSchema.validate(req.body.job);
    if (error) {
      let errMsg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, errMsg);
    } else {
      next();
    }
  };

  module.exports=validateJob;