//  Required remote modules
const fs = require('fs');
const inquirer = require('inquirer');

//  Required local modules for each class & subclass
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const memberType = [];
const members = [];

// Required call to set up web page
// ^need to restate that later
const generate = require('./lib/generate.js');

const managerQs = [
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
    name: 'other',
    message: "What is the team manager's office number?",
  },
  {
    type: 'list',
    name: 'new',
    message: 'Which type of team member would you like to add?',
    choices: ['Manager', 'Engineer', 'Intern', 'No More'],
  },
];

const engineerQs = [
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
    name: 'other',
    message: "What is the engineer's git hub username?",
  },
  {
    type: 'list',
    name: 'new',
    message: 'Which type of team member would you like to add?',
    choices: ['Manager', 'Engineer', 'Intern', 'No More'],
  },
];

const internQs = [
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
    name: 'other',
    message: "What is the intern's school?",
  },
  {
    type: 'list',
    name: 'new',
    message: 'Which type of team member would you like to add?',
    choices: ['Manager', 'Engineer', 'Intern', 'No More'],
  },
];

Initiate();

function Initiate() {
  initManager();
}

//  Initialize Manager function: prompts user with manager questions and passes the data into addManager function
function initManager() {
  inquirer.prompt(managerQs).then((data) => {
    const newEmployee = addManager(data);
    members.push(newEmployee);
    const nextType = data.new;

    switch (nextType) {
      case 'Manager':
        response = initManager();
        memberType.push('Manager');
        break;
      case 'Engineer':
        response = initEngineer();
        memberType.push('Engineer');
        break;
      case 'Intern':
        response = initIntern();
        memberType.push('Intern');
        break;
      case 'No More':
        response = generate(memberType, members);
        break;
    }
    return response;
  });
}

//  Takes data answered in manager prompt and creates a new Manager object. Appends this to the team array.
function addManager(data) {
  const newManager = new Manager(data.name, data.id, data.email, data.other);
  return newManager;
}

//  Initialize Engineer function: prompts user with Engineer questions and passes the data into addEngineer function
function initEngineer() {
  inquirer.prompt(engineerQs).then((data) => {
    const newEmployee = addEngineer(data);
    members.push(newEmployee);
    const nextType = data.new;

    switch (nextType) {
      case 'Manager':
        response = initManager();
        memberType.push('Manager');
        break;
      case 'Engineer':
        response = initEngineer();
        memberType.push('Engineer');
        break;
      case 'Intern':
        response = initIntern();
        memberType.push('Intern');
        break;
      case 'No More':
        response = generate(memberType, members);
        break;
    }
    return response;
  });
}

//  Takes data answered in enineer prompt and creates a new enineer object. Appends this to the team array.
function addEngineer(data) {
  const newEngineer = new Engineer(data.name, data.id, data.email, data.other);
  return newEngineer;
}

//  Initialize Engineer function: prompts user with Engineer questions and passes the data into addEngineer function
function initIntern() {
  inquirer.prompt(internQs).then((data) => {
    const newEmployee = addIntern(data);
    members.push(newEmployee);
    const nextType = data.new;

    switch (nextType) {
      case 'Manager':
        response = initManager();
        memberType.push('Manager');
        break;
      case 'Engineer':
        response = initEngineer();
        memberType.push('Engineer');
        break;
      case 'Intern':
        response = initIntern();
        memberType.push('Intern');
        break;
      case 'No More':
        response = generate(memberType, members);
        break;
    }
    return response;
  });

  //  Takes data answered in intern prompt and creates a new intern object. Appends this to the team array.
  function addIntern(data) {
    const newIntern = new Intern(data.name, data.id, data.email, data.other);
    return newIntern;
  }
}
