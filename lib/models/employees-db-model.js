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
    return await knex(TABLE).select();
}
  
async function getById(id) {
    return await knex(TABLE).select().where({ id });
}
  
async function deleteById(id) {
    await knex(TABLE).select().where({ id }).del();
}
  
async function employeesReport(name, tribe) {
    return await knex(TABLE).select().groupBy({ tribe });
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