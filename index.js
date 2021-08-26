//  Required remote modules
const fs = require('fs');
const inquirer = require('inquirer');

//  Required local modules for each class/subclass
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Required call to set up web page
// ^need to restate that later
const generate = require('./lib/generate');

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
    choices: ['manager', 'engineer', 'intern', 'none of the above', 'no more'],
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
    choices: ['manager', 'engineer', 'intern', 'none of the above', 'no more'],
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
    choices: ['manager', 'engineer', 'intern', 'none of the above', 'no more'],
  },
];

//this info will be put in the output folder
//in file team.html
//and this has a style page so that it loads into a
//web page where each team member has their own card.

//
//BEGIN!!
//all users are employees and have a name, id, and email

// WHEN I start the application
// THEN I am prompted to enter the team manager’s
//name, employee ID, email address, and office number

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s
//name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s
//name, ID, email, and school, and I am taken back to the menu

// WHEN I enter my team manager’s
//name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an
//engineer or an intern or to finish building my team
//need some way to choose to add an engineer or intern
//try user inputs on 08/19 at 2:30 on 08-Stu_Promises
//brobs using bullions
//might could use a Promise.all? 09-Ins Promise

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely
//formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the
//TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

//maybe check out:
//Aritmetic for test stuff on 08/20 Friday 28 min
//or Algo & Fizzbuzz 08/20 at 1:58
