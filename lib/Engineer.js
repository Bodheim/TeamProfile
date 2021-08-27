const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, ghuser) {
    super(name, id, email);
    this.ghuser = ghuser;
    this.role = 'Engineer';
  }

  getGithub() {
    return this.ghuser;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
