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
            choices: [`Engineer`, `Intern`, `Manager`,],
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
        let roleInfo = "";
        if (role === `Engineer`) {
            roleInfo = `GitHub username`;
        } else if (role === `Intern`) {
            roleInfo = `school name`;
        } else {
            roleInfo = `office number`;
        }

        inquirer.prompt([
            {
                message: `Enter ${roleInfo}:`,
                name: `roleInfo`,
            },
            {
                type: `list`,
                message: `Add Members?`,
                choices: [`yes`, `no`,],
                name: "newMember",
            },
        ]).then(function ({ roleInfo, newMember }) {
            let newTeamMember;
            if (role === `Engineer`) {
                newTeamMember = new Engineer(name, id, email, roleInfo);
            } else if (role === `Intern`) {
                newTeamMember = new Intern(name, id, email, roleInfo);
            } else {
                newTeamMember = new Manager(name, id, email, roleInfo);
            }
            employee.push(newMember);
            addHTML(newMember)
                .then(function () {
                    if(newMember === `yes`) {
                        member();
                    } else {
                        finishHTML();
                    }
                })
        })
    });
};