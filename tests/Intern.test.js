const Intern = require('../lib/internClass');

test('getRole', () => {
    const testValue = 'Intern';
    const e = new Intern("Leigh", 7777, "leigh@hotmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test('getSchool', () => {
    const testValue = "MCC";
    const e = new Intern("Leigh", 7777, "leigh@hotmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});