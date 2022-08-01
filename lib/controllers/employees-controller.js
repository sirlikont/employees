const employeesModel = require("../models/employees-model");


function getEvery(ctx) {
    ctx.body = employeesModel.employees;
}

function create(ctx) {
    const name = ctx.request.body.name;
    const title = ctx.request.body.title;
    const tribe = ctx.request.body.tribe;

    if(!text || text === '') {
       ctx.status = 400;
       return;
    }

    employeesModel.employees.push({ name, title, tribe });
    ctx.status = 201;
 }

function getByName(ctx) {
    const name = ctx.request.params.name;
    
    // if(Number(index) < 0 || Number(index) > postModel.posts.length - 1) {
    //     ctx.status = 404;
    //     return;
    // }
    
    ctx.body = employees.Model.employees.name;

}





module.exports = { getEvery, create , getByName}