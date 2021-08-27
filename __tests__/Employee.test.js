//npm run test should run this

//should output:
//Can initiate Employee instance
//Can set name via constructor arguments
//Can set id via constructor arguments
//Can set email via constructor arguments
//can get name via getName()
//can get id via getId()
//can get email via getEmail()
//getRole() should return "Employee"

const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('Should return a new user with the employee class', () => {
    const newEmployee = new Employee(newName, newId, newEmail);
    expect(typeof newEmployee).toBe('object');
  });
  it('Can set a name using constructor arguments', () => {
    const newName = 'Abby';
    const newEmployee = new Employee(newName);
    expect(newEmployee.newName).toEqual(newName);
  });
  it('Can set an id using constructor arguments', () => {
    const newId = 1;
    const newEmployee = new Employee('foo', newId);
    expect(newEmployee.newId).toEqual(newId);
  });
  it('Can set an email using constructor arguments', () => {
    const newEmail = 'a@b.com';
    const newEmployee = new Employee('foo', 1, newEmail);
    expect(newEmployee.newEmail).toEqual(newEmail);
  });
});
