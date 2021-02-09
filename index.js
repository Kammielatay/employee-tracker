var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "KamLatay15",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View Department",
        "View Role",
        "View Employees",
        "Add Department",
        "Add Roles",
        "Add Employees",
        "Update Employee Roles",
        "Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View Department":
          viewDepartment();
          break; 
        
        case "View Role":
          viewRole();
          break;

        case "View Employees":
          viewEmployee();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Roles":
          addRoles();
          break;

        case "Add Employees":
          addEmployees();
          break;

        case "Update Employee Roles":
          updateEmployee();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}

function viewDepartment() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      start();
  });  
}

function viewRole() {
  var query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });  
}

function viewEmployee() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  }); 
}

function addDepartment(){
  inquirer
    .prompt({
      name: "dept",
      type: "input",
      message: "What department would you like to add?"
    })
    .then(function (answer) {
      var query = "INSERT INTO department (department_name) VALUES (?)";
      connection.query(query, answer.dept, function (err, res) {
        if (err) throw err;
        viewDepartment();
      });
    });
};

function addRoles() {
  inquirer
    .prompt([
      {
      name: "title",
      type: "input",
      message: "What role would you like to add?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary?"
      },
      {
        name: "department_id",
        type: "input",
        message: "What is your department id?"
      }
    ])
    .then(function (answer) {
      var query = "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)";
      
      connection.query(query,[answer.title, answer.salary, answer.department_id], function (err, res) {
        if (err) throw err;
        viewDepartment();
      });
    });
}


