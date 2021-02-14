USE employee_db;

INSERT INTO department (department_name)
VALUES 
("Executive Officer"), 
("Product Manager"), 
("Software Engineer"), 
("Sales"),
("HR"),
("Accounting"),
("Administrative Assistant");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Pam", "Demic", 1, 1),
("Kora", "Navirus", 2, 2),
("Corrine", "Tean", 3, 3),
("Liam", "Alohn", 4, 3),
("Amanda", "Shelterwith", 5, 4),
("Hannah", "Washing", 6, 5),
("Maya", "Snacksergon", 7, 7);

INSERT INTO role (title, salary, department_id)
VALUES
("Bartender", 30000, 1),
("Sales Rep", 100000, 4),
("Front-End Engineer", 110000, 3),
("Car Salesman", 120000, 4),
("Full-Stack Engineer", 170000, 3),
("Accounting Manager", 70000, 6),
("Administrative Assistant", 40000, 7);
