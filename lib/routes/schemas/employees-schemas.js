const KoaJoiRouter = require("@koa-better-modules/joi-router");;
const Joi = KoaJoiRouter.Joi;

const createSchema = Joi.object({
    name: Joi.string().pattern(new RegExp(/^[a-zA-ZÄäÕõÖöÜü\s]*$/)).required(),
    title: Joi.string().required(),
    tribe: Joi.string().required(),
});

const getAllSchema = Joi.object({
    name: Joi.string(),
    title: Joi.string(),
    tribe: Joi.string(),
});
  
const ByIdSchema = Joi.object({
    id: Joi.number().required()
});

module.exports = {
    getAllSchema,
    createSchema,
    ByIdSchema,
};