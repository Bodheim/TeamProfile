//npm run test should run this

//note this is manager specific info, an manager is also an employee
//employee holds info that all employees like interns and engineers
//also have like name, id, and email

//should output:
//Can get office number via constructor argument
//Can get office number via getOffice()
//getRole() should return "Manager"

const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('Should return a new user from the Manager class', () => {
    const newEmployee = new Employee(newName, newId, newEmail);
    expect(typeof newEmployee).toBe('object');
    const newManager = new Manager(newOffice);
    expect(typeof newManager).toBe('object');
  });
  it('Can get office number using constructor args', () => {
    const newOffice = '20';
    const newManager = new Manager(newOffice);
    expect(newManager.newOffice).toEqual(newOffice);
  });
  it('Can get office number via getOffice()', () => {
    expect(newManager.getOffice()).toEqual('20');
  });
  it("getRole() should return 'Manager'", () => {
    expect(newManager.getRole()).toEqual('Manager');
  });
});
