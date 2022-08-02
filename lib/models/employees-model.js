const employees = [
    { name: 'Sirli Kont', title: 'intern', tribe: 'InternStellar' },
    { name: 'Gloria Krieger', title: 'intern', tribe: 'InternStellar' },
    { name: 'Annabel Pugi', title: 'intern', tribe: 'InternStellar' },
    { name: 'Cardo Tisler', title: 'junior developer', tribe: 'Billing' },
    { name: 'Rain Saaremae', title: 'head of engineering', tribe: 'Billing' },
    { name: 'Zohaib Ahmed', title: 'full stack developer', tribe: 'Rigas' },
    ];

    function getEvery() {
        return employees;
    }

    function create(employee) {
        employees.push(employee);
    }
      
    function getById(id) {
        return employees[id];
    }
      
    function remove(id) {
        employees.splice(id, 1);
    }
      
    function searchByName(name) {
        const result = employees.filter((x) =>
          x.name.toLowerCase().includes(name.toLowerCase())
        );
      
        return result;
    }
      
    function filterEmployees(title, tribe) {
        const result = employees.filter(
          (x) =>
            (title ? x.title === title : true) && (tribe ? x.tribe === tribe : true)
        );
      
        return result;
    }
      
    function employeesReport() {
        const report = {};
        for (employee of employees) {
          if (employee.tribe in report) {
            report[employee.tribe].push(employee);
          } else {
            report[employee.tribe] = [];
            report[employee.tribe].push(employee);
          }
        }
      
        return report;
    }
      
      
    module.exports = { employees, getEvery, create, getById, remove,searchByName, filterEmployees, employeesReport };