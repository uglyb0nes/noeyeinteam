const Manager = require('../lib/managerClass');

test ('getRole', () => {
    const testValue = 'Manager';
    const e = newManager("Leigh", 7777, "leigh@hotmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test('getOffice', () => {
    const testValue = '11';
    const e = new Manager("Leigh", 7777, "leigh@hotmail.com", testValue);
    expect(e.getOffice()).toBe(testValue);
});