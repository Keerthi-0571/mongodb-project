use supermarket;

db.createCollection("employees");

var data1 = [
  {"emp_name":"haritha","emp_age":23,"job_role":"cashier","salary":20000},
  {"emp_name":"shalini","emp_age":17,"job_role":"store manager","salary":100000},
  {"emp_name":"riya","emp_age":18,"job_role":"store associate","salary":30000},
  {"emp_name":"leeya","emp_age":23,"job_role":"senior cashier","salary":45000},
  {"emp_name":"sagar","emp_age":20,"job_role":"store associate","salary":35000}
];

db.employees.insertMany(data1);

db.employees.find();
