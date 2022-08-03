const koaJoiRouter = require('koa-joi-router');
const Joi = koaJoiRouter.Joi;

const createSchema = Joi.object({
    name: Joi.string().pattern(new RegExp(/^[a-zA-ZÄäÕõÖöÜü\s]*$/)).required(),
    title: Joi.string().required(),
    tribe: Joi.string().required(),
});

const getAllSchema = Joi.object({
    name: Joi.string()
    // title: Joi.string()
    // tribe: Joi.string()
});
  
const getByIdSchema = Joi.object({
    id: Joi.number().required()
});
  
const deleteByIdSchema = Joi.object({
    id: Joi.number().required()
});

// const employeesReport = Joi.object({

// });
  
module.exports = {
    getAllSchema,
    createSchema,
    getByIdSchema,
    deleteByIdSchema,
    //emplpyeesReport
};