//npm run test should run this

//note this is engineer specific info, an engineer is also an employee
//employee holds info that all employees like interns and managers
//also have like name, id, and email

//should output
//Can set GitHub acount via constructor
//Can get GitHub username via getGithub()
//getRole() should return "Engineer"

const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  it('should return a new object from the engineer class', () => {
    const obj = new Engineer();
    expect(typeof obj).toBe('object');
  });
  it('can set a name using constructor args', () => {
    const name = 'foo';
    const obj = new Engineer(name);
    expect(obj.name).toEqual(name);
  });
  it('can set an id using constructor args', () => {
    const id = 4;
    const obj = new Engineer('foo', id);
    expect(obj.id).toEqual(id);
  });
  it('can set an email using constructor args', () => {
    const email = 'foo@yahoo.com';
    const obj = new Engineer('foo', 4, email);
    expect(obj.email).toEqual(email);
  });
  it('can set a github using constructor args', () => {
    const github = 'ber';
    const obj = new Engineer('foo', 4, 'foo@yahoo.com', github);
    expect(obj.github).toEqual(github);
  });
});
