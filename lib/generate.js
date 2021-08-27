//Bring in Module fs to write file
const fs = require('fs');

function writeToFile(data) {
  fs.writeFile('./output/team.html', data, (err) => {
    err ? console.log(err) : console.log('Complete! Please see index.html');
  });
}

//This function renders the HTML before the employee cards
function renderTop() {
  return `\n
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="style.css" />
          <title>Team Profile</title>
        </head>
    
      <body>
        <nav class="bg-dark text-light text-center p-3">
          <h1>Team Members</h1>
        </nav>
    
        <main
          class="
            container
            d-flex
            flex-row
            justify-content-center
            align-items-center
            col-10">
          <div class="row cardContainer"></div>
    `;
}

function renderBottom() {
  return `\n    
        </main>
      <!-- jQuery -->
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <!-- Custom JS file -->
      <script src="./index.js"></script>
      </body>
    </html>`;
}

//Creates a manager card
function managerCard(data) {
  return `
    <div class="card m-4 text-light" style="width: 24rem">
      <div class="card-header bg-success">
        <h3>${data.name}</h3>
        <div class="d-flex flex-row">
          <img class="icon-image" src="../src/manager.jpeg" />
          <p class="m-2">Manager</p>
        </div>
      </div>
      <ul class="list-group list-group-flush text-dark">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item"> 
        Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a>
        </li>
        <li class="list-group-item">Office Number = ${data.office}</li>
      </ul>
  </div>`;
}

//Creates an engineer card
function engineerCard(data) {
  return `
    <div class="card m-4 text-light" style="width: 24rem">
      <div class="card-header bg-warning">
        <h3>${data.name}</h3>
      <div class="d-flex flex-row">
        <img class="icon-image" src="../src/engineer.jpeg" />
        <p class="m-2">Engineer</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">
          Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a>
      </li>
      <li class="list-group-item">  
        GitHub = <a href="https://github.com/${data.ghuser}" target="no_blank">${data.gitHub}</a>
    </li>
    </ul>
  </div>`;
}

//Creates an intern card
function internCard(data) {
  return `<div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-info">
      <h3>${data.name}</h3>
      <div class="d-flex flex-row">
        <img class="icon-image" src="../src/intern.png" />
        <p class="m-2">Intern</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a>
    </li>
      <li class="list-group-item">School: ${data.school}</li>
    </ul>
  </div>`;
}

//Export code to index.js
module.exports = generate;
