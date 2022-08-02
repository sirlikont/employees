const employeesModel = require("../models/employees-model");


function getEvery(ctx) {
    ctx.body = employeesModel.employees;
};

function create(ctx) {
    
    const name = ctx.request.body.name;
    const title = ctx.request.body.title;
    const tribe = ctx.request.body.tribe;

    if(!name || name === '' || !tribe || !title) {
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

function filterEmployees(ctx) {
    const title = ctx.request.query.title;
    const tribe = ctx.request.query.tribe;

    if (!(title || tribe)) {
        ctx.status = 400;
        return;
    };

    const employees = employeesModel.employees.filter((x) => {
        if (title && tribe) {
            return x.title === title && x.tribe === tribe;
        } else if (title && !tribe) {
            return x.title === title;
        } else if (!title && tribe) {
            return x.tribe === tribe;
        }
    });
    ctx.body = employees;
}

function employeesReport(ctx) {
    const report = {};
    for (employee in empoloyeesModel.employees) {
        if(employee.tribe in report) {
            report[employee.tribe].push(employee)
        } else {
            report[employee.tribe] = [];
            report[employee.tribe].push(employee);
        }
    }

    ctx.body = report;
}

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




module.exports = { getEvery, create , getTitleTribe, filterEmployees, employeesReport }