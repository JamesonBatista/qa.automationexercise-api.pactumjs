const Joi = require("joi");

const createUser = Joi.object({
  responseCode: Joi.number().valid(201).required(),
  message: Joi.string().valid({"message": "User created!", "responseCode": 201}).required(),
});

module.exports = { createUser };
