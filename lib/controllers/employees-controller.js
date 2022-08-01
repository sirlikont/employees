const employeesModel = require("../models/employees-model");
function getEvery(ctx) {
    ctx.body = employeesModel.employees;
}
module.exports = { getEvery }