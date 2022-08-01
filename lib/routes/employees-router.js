const Router = require("@koa/router");
const router = new Router();
const employeesController = require('../controllers/employees-controller');

router.get('/employees', employeesController.getEvery);

module.exports = router;