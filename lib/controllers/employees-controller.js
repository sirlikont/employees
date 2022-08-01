const employeesModel = require("../models/employees-model");


function getEvery(ctx) {
    ctx.body = employeesModel.employees;
};

function create(ctx) {
    const name = ctx.request.body.name;
    const title = ctx.request.body.title;
    const tribe = ctx.request.body.tribe;

    if(!name || name === '') {
       ctx.status = 400;
       return;
    }

    employeesModel.employees.push({ name, title, tribe });
    ctx.status = 201;
 };

function getTitleTribe(ctx) {
    const query = ctx.request.query.q;
    for(let employee of employeesModel.employees){
        if (employee.name.toLowerCase() === query.toLowerCase()) {
            ctx.body = `title is ${employee.title} \ntribe is ${employee.tribe}`
        } else {
            ctx.status = 404;
        }
    }           
};

// function findByName(ctx) {
//     const query = ctx.request.query.q;
//     for(let employee of employeesModel.employees){
//         if (employee.name.includes(query)) {
//             ctx.body = employee
//         } else {
//             ctx.status = 404;
//         }
//     }           
// };




module.exports = { getEvery, create , getTitleTribe }