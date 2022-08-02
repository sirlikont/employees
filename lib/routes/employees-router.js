const koaJoiRouter = require("koa-joi-router");
const router = koaJoiRouter();

const employeesController = require('../controllers/employees-controller');
const employeesSchemas = require('./schemas/employees-schemas');

router.get('/employees', employeesController.getEvery);

router.route({
    method: "POST",
    path: '/employees',
    validate: {
        body: employeesSchemas.createSchema,
        type: 'json',
    },
    handler: employeesController.create,
});

router.get('/api/employees/search', employeesController.getTitleTribe);
//router.get('/api/employees/search', employeesController.findByName);
//router.post('/employees', employeesController.create);
router.get('/filter/employees',employeesController.filterEmployees);
//router.get('/search/employees?name)
router.get('reports/employees', employeesController.employeesReport);
module.exports = router;