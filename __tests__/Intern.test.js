//npm run test should run this

//note this is intern specific info, an intern is also an employee
//employee holds info that all employees like engineers and managers
//also have like name, id, and email

//should output:
//Can get school via constructor
//Can get school via getSchool()
//getRole() should return "Intern"

const Intern = require('../lib/intern');

describe('Intern', () => {
  it('should return a new object from the intern class', () => {
    const obj = new Intern();
    expect(typeof obj).toBe('object');
  });
  it('can set a name using constructor args', () => {
    const name = 'Ben';
    const obj = new Intern(name);
    expect(obj.name).toEqual(name);
  });
  it('can set an id using constructor args', () => {
    const id = 2;
    const obj = new Intern('foo', id);
    expect(obj.id).toEqual(id);
  });
  it('can set an email using constructor args', () => {
    const email = 'foo@yahoo.com';
    const obj = new Intern('foo', 4, email);
    expect(obj.email).toEqual(email);
  });
  it('can set a school using constructor args', () => {
    const school = 'DU';
    const obj = new Intern('foo', 4, 'nick@gmail.com', school);
    expect(obj.school).toEqual(school);
  });
});
