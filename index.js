const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineerClass');
const Intern = require('./lib/internClass');
const Manager = require('./lib/managerClass');

const employee = [];

function init() {
    html();
    member();
};

function member() {
    inquirer.prompt([
        {
            type: `input`,
            message: `Member Name:`,
            name: `name`,
        },
        {
            type: `list`,
            message: `Member Role:`,
            choices: [`Engineer`, `Intern`, `Manager`],
            name: `role`,
        },
        {
            type: `number`,
            message: `Member ID`,
            name: `id`,
        },
        {
            type: `input`,
            message: `Member Email`,
            name: `email`,
        },
    ]);

    .then(function ({ name, role, id, email }) {
        let role
    });
};