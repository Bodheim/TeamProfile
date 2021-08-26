//may be able to use subclass?

class Engineer {
  constructor(ghuser) {
    this.ghuser = ghuser;
  }

  getGhuser() {
    return this.ghuser;
  }

  getRole() {
    return 'Engineer';
  }
}
