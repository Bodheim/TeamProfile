//npm run test should run this

//note this is intern specific info, an intern is also an employee
//employee holds info that all employees like engineers and managers
//also have like name, id, and email

//should output:
//Can get school via constructor
//Can get school via getSchool()
//getRole() should return "Intern"

const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('Should return a new user from the intern class', () => {
    const newEmployee = new Employee(newName, newId, newEmail);
    expect(typeof newEmployee).toBe('object');
    const newIntern = new Intern(newSchool);
    expect(typeof newIntern).toBe('object');
  });
  it('Can get school using constructor args', () => {
    const newSchool = 'UT';
    const newIntern = new Intern(newSchool);
    expect(newIntern.newSchool).toEqual(newSchool);
  });
  it('Can get school via getSchool()', () => {
    expect(newIntern.getSchool()).toEqual('UT');
  });
  it("getRole() should return 'Intern'", () => {
    expect(newIntern.getRole()).toEqual('Intern');
  });
});
