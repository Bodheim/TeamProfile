//npm run test should run this

//note this is engineer specific info, an engineer is also an employee
//employee holds info that all employees like interns and managers
//also have like name, id, and email

//should output
//Can set GitHub acount via constructor
//Can get GitHub username via getGithub()
//getRole() should return "Engineer"

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('Should return a new user from the engineer class', () => {
    const newEmployee = new Employee(newName, newId, newEmail);
    expect(typeof newEmployee).toBe('object');
    const newEngineer = new Engineer(newGhuser);
    expect(typeof newEngineer).toBe('object');
  });
  it('Can set a github using constructor args', () => {
    const newGhuser = 'GitUserName';
    const newEngineer = new Engineer(newGhuser);
    expect(newEngineer.newGhuser).toEqual(newGhuser);
  });
  it('Can get GitHub username via getGithub()', () => {
    expect(newEngineer.getGithub()).toEqual('GitUserName');
  });
  it("getRole() should return 'Engineer'", () => {
    expect(newEngineer.getRole()).toEqual('Engineer');
  });
});
