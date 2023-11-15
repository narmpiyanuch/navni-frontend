import Joi from "joi";

const registerDriverSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{8,30}$/)
        .trim()
        .required()
        .messages({
            "string.pattern.base":
                "Password must be between 8 and 30 characters and contain only letters and numbers.",
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .trim()
        .required()
        .strip(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    phoneNumber: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .messages({
            "string.pattern.base":
                "Mobile number must be exactly 10 digits long and contain only numbers.",
        }),
    idCard: Joi.string()
        .pattern(/^[0-9]{13}$/)
        .messages({
            "string.pattern.base":
                '"IdCard" consists of 13 numeric digits to pass the validation',
        }),
    gender: Joi.string().required(),
}).options({ allowUnknown: true });

export default registerDriverSchema;
