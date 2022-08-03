const employees = [
    { name: 'Sirli Kont', title: 'intern', tribe: 'InternStellar' },
    { name: 'Gloria Krieger', title: 'intern', tribe: 'InternStellar' },
    { name: 'Annabel Pugi', title: 'intern', tribe: 'InternStellar' },
    { name: 'Cardo Tisler', title: 'junior developer', tribe: 'Billing' },
    { name: 'Rain Saaremae', title: 'head of engineering', tribe: 'Billing' },
    { name: 'Zohaib Ahmed', title: 'full stack developer', tribe: 'Rigas' },
    ];


function create(employee) {
  employees.push(employee);
  }
    // function getAll() {
    //     return employees;
    // }

function getAll(name, title, tribe) {
  const result = employees.filter(
    (employee) =>
      (name
        ? employee.name.toLowerCase().includes(name.toLowerCase())
        : true) &&
      (title ? employee.title === title : true) &&
      (tribe ? employee.tribe === tribe : true)
  );
  return result;
}

      
function getById(id) {
  return employees[id];
}
 
function deleteById(id) {
  employees.splice(id, 1);
}   
      
    // function searchByName(name) {
    //     const result = employees.filter((x) =>
    //       x.name.toLowerCase().includes(name.toLowerCase())
    //     );
      
    //     return result;
    // }
      
    // function filterEmployees(title, tribe) {
    //     console.log(title)

    //     const result = employees.filter(
    //       (x) =>
    //         (title ? x.title === title : true) && (tribe ? x.tribe === tribe : true)
    //     );
      
    //     return result;
    // }
   
    //Minu oma:
    // function employeesReport() {
    //     const report = {};
    //     for (employee of employees) {
    //       if (employee.tribe in report) {
    //         report[employee.tribe].push(employee);
    //       } else {
    //         report[employee.tribe] = [];
    //         report[employee.tribe].push(employee);
    //       }
    //     }
      
    //     return report;
    // }
function employeesReport() {
  const report = {};
  for (employee of employeesModel.employees) {
    if (employee.tribe in report) {
      report[employee.tribe].push(employee);
    } else {
      report[employee.tribe] = [];
      report[employee.tribe].push(employee);
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