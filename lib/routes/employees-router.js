const Router = require("@koa/router");
const router = new Router();
const employeesController = require('../controllers/employees-controller');

router.get('/employees', employeesController.getEvery);
router.get('/api/employees/search', employeesController.getTitleTribe);
//router.get('/api/employees/search', employeesController.findByName);
router.post('/employees', employeesController.create);
router.get('/filter/employees',employeesController.filterEmployees);
//router.get('/search/employees?name)
router.get('reports/employees', employeesController.employeesReport);
module.exports = router;