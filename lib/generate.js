const fs = require('fs');

function generateHTML() {
  console.log(employees);
  const filterManager = employees.filter((em) => em.getRole() === 'Manager');

  const filterIntern = employees.filter((em) => em.getRole() === 'Intern');

  const filterEngineer = employees.filter((em) => em.getRole() === 'Engineer');
  console.log(filterEngineer);
  console.log(filterIntern);
  console.log(filterManager);
  const htmlManager = filterManager.map((item) => {
    return `<div>`;
  });

  const htmlIntern = filterIntern.map((item) => {
    return ``;
  });

  const htmlEngineer = filterEngineer.map((item) => {
    return ``;
  });
}

module.exports = generateHTML;
