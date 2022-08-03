const Knex = require('knex');

const knexConfig = {
    client: "mysql2",
    version: "8.0",
    connection: {
      host: "localhost",
      user: "root",
      password: "password",
      database: "employeesdb",
    },
};

const knex = Knex(knexConfig);

const TABLE = 'employees';


async function create(employee) {
    await knex(TABLE).insert(employee);
}
  
async function getAll(name, title, tribe) {
    const query = knex(TABLE).select();

    if(name) query.whereILike('name', `%${name}%`);
    if(title) query.where({ title });
    if(tribe) query.where({ tribe });

    return await query;
}
  
async function getById(id) {
    return await knex(TABLE).select().where({ id });
}
  
async function deleteById(id) {
    await knex(TABLE).select().where({ id }).del();
}
  
async function employeesReport() {
    const employees = await knex(TABLE).select();

    const report = {};
    for (employee of employees) {
      if (employee.tribe in report) {
        report[employee.tribe].push({ name: employee.name, title: employee.title, });
      } else {
        report[employee.tribe] = [];
        report[employee.tribe].push({ name: employee.name, title: employee.title, });
        }
    }
      
    return report;
}
  
module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    employeesReport,
};


// function searchByName(name) {
//     return null;
// }

// function filterEmployees(title, tribe) {
//     return null;
// }