const Joi = require('joi');

const productSchema = Joi.object({
  id: Joi.number().integer().positive().required(), 
  name: Joi.string().min(1).required(), 
  price: Joi.string().pattern(/^Rs\.\s\d+$/).required(), 
  brand: Joi.string().valid('Polo', 'H&M', 'Madame', 'Mast & Harbour', 'Babyhug', 'Kookie Kids', 'Allen Solly Junior', 'Biba').required(), 
  category: Joi.object({
    usertype: Joi.object({
      usertype: Joi.string().valid('Women', 'Men', 'Kids').required() 
    }).required(),
    category: Joi.string().valid('Tops', 'Tshirts', 'Dress', 'Jeans', 'Saree', 'Tops & Shirts').required() 
  }).required()
});

const productsListSchema = Joi.object({
  responseCode: Joi.number().valid(200).required(), 
  products: Joi.array().items(productSchema).min(1).required() 
});

module.exports = { productsListSchema };
