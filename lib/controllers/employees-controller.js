//const employeesModel = require("../models/employees-model");
const employeesModel = require("../models/employees-db-model")
//const Joi = require('joi');

async function getEvery(ctx) {
    ctx.status = 200;
    ctx.body = await employeesModel.getEvery();
};

async function create(ctx) {
    const employee = ctx.request.body;
    await employeesModel.create(employee);
    ctx.status = 201;
  }

async function getById(ctx) {
    const id = ctx.params.id;
    ctx.status = 200;
    ctx.body = await employeesModel.getById(id);
  }
  
async function remove(ctx) {
    const id = ctx.params.id;
  
    ctx.status = 200;
    await employeesModel.remove(id);
  }
  
function searchByName(ctx) {
    const name = ctx.query.name;
  
    if (!name) {
      ctx.status = 400;
      return;
    }
    ctx.status = 200;
    ctx.body = employeesModel.searchByName(name);

  }

function filterEmployees(ctx) {
    const title = ctx.request.query.title;
    const tribe = ctx.request.query.tribe;

    if (!(title || tribe)) {
        ctx.status = 400;
        return;
    };
    ctx.status = 200;
    ctx.body = employeesModel.filterEmployees(title, tribe);
};

function employeesReport(ctx) {
    ctx.status = 200;
    ctx.body = employeesModel.employeesReport();
  }



module.exports = { getEvery, create, filterEmployees, employeesReport, getById, remove, searchByName }