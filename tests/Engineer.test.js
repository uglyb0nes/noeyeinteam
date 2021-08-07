const Engineer = require('../lib/engineerClass');

test('getRole', () => {
    const testValue = 'Engineer';
    const e = new Engineer("Leigh", 3333, "leigh@hotmail.com", "github");
    expect(e.getRole()).toBe(testValue);
});

test('getGithub', () => {
    const testValue = 'github';
    const e = new Engineer("Leigh", 3333, "leigh@hotmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});