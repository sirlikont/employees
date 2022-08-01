const Router = require("@koa/router");
const router = new Router();
const employeesController = require('../controllers/employees-controller');

router.get('/employees', employeesController.getEvery);
router.get('/employees/:name', employeesController.getByName);
router.post('/employees', employeesController.create);

module.exports = router;