//  Required remote modules
const fs = require('fs');
const inquirer = require('inquirer');

//  Required local modules for each class & subclass
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];
init();

function init() {
  managerQs();
}

function managerQs() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
      },
      {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.office
      );
      employees.push(manager);
      anotherMember();
    });
}

function engineerQs() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the engineers id?',
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
      },
    ])

    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(engineer);
      anotherMember();
    });
}

function internQs() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employees.push(intern);
      anotherMember();
    });
}

//  Initialize Manager function: prompts user with manager questions
function anotherMember() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: ['Manager', 'Engineer', 'Intern', 'None'],
        name: 'type',
      },
    ])
    .then((response) => {
      switch (response.type) {
        case 'Manager':
          managerQs();
          break;
        case 'Engineer':
          engineerQs();
          break;
        case 'Intern':
          internQs();
          break;
        default:
          generateHTML();
          break;
      }
    });
}

function generateHTML() {
  const filterManager = employees.filter((em) => em.getRole() === 'Manager');
  const filterEngineer = employees.filter((em) => em.getRole() === 'Engineer');
  const filterIntern = employees.filter((em) => em.getRole() === 'Intern');

  const htmlManager = filterManager.map((item) => {
    return `<div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-success">
    <h3>${item.name}</h3>
    <div class="d-flex flex-row">
    <p class="m-2">Manager</p>
    </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
    <li class="list-group-item">ID: ${item.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${item.email}" target="no_blank">${item.email}</a></li>
    <li class="list-group-item">Office Number = ${item.office}</li>
    </ul>
    </div>`;
  });

  const htmlEngineer = filterEngineer.map((item) => {
    return `
    <div class="card m-4 text-light" style="width: 24rem">
      <div class="card-header bg-warning">
        <h3>${item.name}</h3>
      <div class="d-flex flex-row">
        <p class="m-2">Engineer</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
    <li class="list-group-item">ID: ${item.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${item.email}" target="no_blank">${item.email}</a></li>
    <li class="list-group-item">GitHub: <a href="'https://github.com/ + ${item.github}'" target="_blank">${item.github}</a></li>
    </ul>
  </div>`;
  });

  const htmlIntern = filterIntern.map((item) => {
    return `<div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-info">
      <h3>${item.name}</h3>
      <div class="d-flex flex-row">
        <p class="m-2">Intern</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${item.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${item.email}" target="no_blank">${item.email}</a>
    </li>
      <li class="list-group-item">School: ${item.school}</li>
    </ul>
  </div>`;
  });

  let cards = '';

  const pushManager = htmlManager.forEach((item) => {
    cards += item;
  });
  const pushIntern = htmlIntern.forEach((item) => {
    cards += item;
  });
  const pushEngineer = htmlEngineer.forEach((item) => {
    cards += item;
  });

  const renderHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./output/style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <nav>
      <div class="header">My Team</div>
    </nav>
    <main
      class="
        container
        d-flex
        flex-row
        justify-content-center
        align-items-center
        col-10
      "
    >
      <div class="row cardContainer">${cards}</div>
    </main>
    <script src="../index.js"></script>
  </body>
</html>`;

  fs.writeFile('./output/team.html', renderHTML, (err) => {
    err ? console.error(err) : console.log('Data was written Successfully');
  });
}
