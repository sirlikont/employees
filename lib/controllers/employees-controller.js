const employeesModel = require("../models/employees-model");
//const Joi = require('joi');

function getEvery(ctx) {
    ctx.status = 200;
    ctx.body = employeesModel.getEvery();
};
function create(ctx) {
    const employee = ctx.request.body;
    employeesModel.create(employee);
  
    ctx.status = 201;
  }
    
    // const name = ctx.request.body.name;
    // const title = ctx.request.body.title;
    // const tribe = ctx.request.body.tribe;

    // if(!name || name === '' || !tribe || !title) {
    //    ctx.status = 400;
    //    return;
    // }

    //employeesModel.employees.push({ name, title, tribe });
 

// function getTitleTribe(ctx) {
//     const query = ctx.request.query.q;
//     for(let employee of employeesModel.employees){
//         if (employee.name.toLowerCase() === query.toLowerCase()) {
//             ctx.body = `title is ${employee.title} \ntribe is ${employee.tribe}`
//         } else {
//             ctx.status = 404;
//         }
//     }           
// };

function getById(ctx) {
    const id = ctx.params.id;

    ctx.status = 200;
    ctx.body = employeesModel.getById(id);
  }
  
  function remove(ctx) {
    const id = ctx.params.id;
  
    ctx.status = 200;
    employeesModel.remove(id);
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
    ctx.body = employeesModel.filterEmployees(title, tribe);
};

function employeesReport(ctx) {
    ctx.status = 200;
    ctx.body = employeesModel.employeesReport();
  }

// function employeesReport(ctx) {
//     const report = {};
//     for (employee in empoloyeesModel.employees) {
//         if(employee.tribe in report) {
//             report[employee.tribe].push(employee)
//         } else {
//             report[employee.tribe] = [];
//             report[employee.tribe].push(employee);
//         }
//     }

//     ctx.body = report;
// };

// function findByName(ctx) {
//     const query = ctx.request.query.q;
//     for(let employee of employeesModel.employees){
//         if (employee.name.includes(query)) {
//             ctx.body = employee
//         } else {
//             ctx.status = 204;
//         }
//     }           
// };





module.exports = { getEvery, create, filterEmployees, employeesReport, getById, remove, searchByName }