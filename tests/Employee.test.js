const Employee = require("../lib/employeeClass");

test('Get employee object', () => {
    const e = new Employee("Leigh");
    expect(typeof (e)).toBe("object");
});

test('getName', () => {
    const testValue = "Leigh";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('getID', () => {
    const testValue = "7777";
    const e = new Employee("Leigh", testValue);
    expect(e.getID()).toBe(testValue);
});

test('getEmail', () => {
    const testValue = "leigh@hotmail.com";
    const e = new Employee("Leigh", 7777, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole', () => {
    const testValue = 'Employee';
    const e = new Employee("Leigh", 7777, "leigh@hotmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});
