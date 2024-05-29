import Joi from "joi"
import DTO from "../../models/vacation/dto"

export const addVacationValidator = Joi.object<DTO>({
    id: Joi.string().optional(),
    description: Joi.string().alphanum().min(4).lowercase().required(),
    destination: Joi.string().alphanum().min(4).lowercase().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    price: Joi.number().min(1).max(1000),


    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png'),
    }).unknown(true).optional()
});

export const putVacationValidator = addVacationValidator;

export const patchVacationValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    description: Joi.string().alphanum().min(4).lowercase(),
    destination: Joi.number().min(1).max(1000),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    price: Joi.number().min(1).max(1000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png'),
    }).unknown(true).optional()
});