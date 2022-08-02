const koaJoiRouter = require('koa-joi-router');
const Joi = koaJoiRouter.Joi;

const createSchema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().required(),
    tribe: Joi.string().required(),
});


module.exports = { createSchema };

// name: Joi.string().pattern(new RegExp("/^[]")).required(),