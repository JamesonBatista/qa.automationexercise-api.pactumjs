const Joi = require('joi');

const deleteRandomAccount = Joi.object({
  responseCode: Joi.number().valid(200).required(),
  message: Joi.string().valid('Account deleted!').required()
});

module.exports = { deleteRandomAccount };
