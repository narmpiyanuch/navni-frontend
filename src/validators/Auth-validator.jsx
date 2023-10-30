import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().trim().required(),
});

export default loginSchema;
