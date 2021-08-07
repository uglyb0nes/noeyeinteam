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
    ])

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

function html() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <title>Team Member Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Member Profile</span>
        </nav>
        <div class="card-group">`;
    fs.writeFile("./dist/members.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Initiate");
}

function addHTML(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getID();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const github = member.getGithub();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h1 class="card-header">Engineer</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${github}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h1 class="card-header">Intern</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else { 
            const officeNumber = member.getOffice();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h1 class="card-header">Manager</h1>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
        </div>`;
        }
        console.log("adding team member(s)");
        fs.appendFile("./dist/members.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHTML() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/members.html", html, function (err) {
        if(err) {
            console.log(err);
        };
    });
    console.log("HTML is in dist folder.");
};

init();