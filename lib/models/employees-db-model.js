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

async function getEvery() {
   return await knex(TABLE).select();
}

async function create(employee){
    await knex(TABLE).insert(employee) 
}

async function getById(id) {
    return await knex(TABLE).select().where({ id })
}

async function remove(id) {
    await knex(TABLE).select().where({ id }).del()
}

function searchByName(name) {
    return null;
}

function filterEmployees(title, tribe) {
    return null;
}

function employeesReport() {
    return null;
}

module.exports = { getEvery, create, getById, remove,searchByName, filterEmployees, employeesReport };