const inquirer = require('inquirer');
const fs = require('fs')
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const generateCards = require('./dist/GenCard.js');
const card = require('./lib/card');
const generatePage = require('./dist/GenPage');
var employees = [];
var menu = {
    type: 'list',
    name: 'select',
    message: 'would you like to add another engineer or intern',
    choices: ['Engineer', 'Intern', `No, I'm all done`]
}
var engineerPropmts = [{
    type: 'text',
    name: 'name',
    message: `What is the engineer's name?`
  },{
    type: 'text',
    name: 'ID',
    message: `What is the engineer's ID?`
  },{
    type: 'text',
    name: 'email',
    message: `What is the engineer's email?`
  },{
    type: 'text',
    name: 'github',
    message: `What is the engineer's github username?`
  }];
var internPrompts = [{
    type: 'text',
    name: 'name',
    message: `What is the intern's name?`
  },{
    type: 'text',
    name: 'ID',
    message: `What is the intern's ID?`
  },{
    type: 'text',
    name: 'email',
    message: `What is the intern's email?`
  },{
    type: 'text',
    name: 'school',
    message: `What is the intern's school?`
  }];
var managerPrompts = [{
    type: 'text',
    name: 'name',
    message: `What is the manager's name?`
  },{
    type: 'text',
    name: 'ID',
    message: `What is the manager's ID?`
  },{
    type: 'text',
    name: 'email',
    message: `What is the manager's email?`
  },{
    type: 'text',
    name: 'office',
    message: `WWhat is the manager's office number?`
  }];


function ManagerHandler() {
  return inquirer.prompt(managerPrompts);
  }

function engineerHandler() {
    inquirer
    .prompt(engineerPropmts)
    .then( data => {
        employees.push(new engineer(data.name, data.ID, data.email, data.github))
        console.log(employees);
        menuHandler();
    })
    }

function internHandler() {
   inquirer
   .prompt(internPrompts)
   .then( data => {
    employees.push(new intern(data.name, data.ID, data.email, data.school))
    console.log(employees);
    menuHandler();
})
   }

function menuHandler(){
    inquirer
        .prompt(menu)
        .then(data => {
            if (data.select == 'Engineer'){
                engineerHandler();
            }else if (data.select == 'Intern'){
                internHandler();
            }else if (data.select == `No, I'm all done`){
                pageHandler()
            }
        })
}


function pageHandler(){
  pageText = [];

  for(var x = 0; x < employees.length; x++){
    if (employees[x].job == '<p>Intern</p>'){
      pageText.push(generateCards(new card(employees[x].job, employees[x].name, employees[x].ID, employees[x].email, employees[x].school)))
    }else if (employees[x].job == '<p>Engineer</p>'){
      pageText.push(generateCards(new card(employees[x].job, employees[x].name, employees[x].ID, employees[x].email, employees[x].GitHub)));
    }else{
      pageText.push(generateCards(new card(employees[x].job, employees[x].name, employees[x].ID, employees[x].email, employees[x].office)));
    }
  }
  fs.writeFile('./Generated_page/index.html', generatePage(pageText.join('')), function (err) {
    if (err) throw err;
  });


}

ManagerHandler()
  .then(managerData => {
    employees.push(new manager(managerData.name, managerData.ID, managerData.email, managerData.office))
    menuHandler();
  })


  

