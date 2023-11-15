import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().trim().required(),
});

export const registerSchemaForUser = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{8,30}$/)
        .trim()
        .required(),
    confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .trim()
        .required()
        .strip(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10}$/),
}).options({ allowUnknown: true });

export const editProfileUser = Joi.object({
    firstName: Joi.string().trim(),
    lastName: Joi.string().trim(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10}$/),
});
