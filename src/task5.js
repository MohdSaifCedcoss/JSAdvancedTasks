var employees = [];
class employee {
  id;
  name;
  salary;
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}
var ob1 = new employee(2265, "Saif", 20000);
var ob2 = new employee(2266, "Abhishek", 18000);
var ob3 = new employee(2267, "Kaif", 19000);
var ob4 = new employee(2268, "Mudassir", 18500);
var ob5 = new employee(2269, "Shreya", 17000);

employees.push(ob1);
employees.push(ob2);
employees.push(ob3);
employees.push(ob4);
employees.push(ob5);

function showOld() {
  let table =
    "<table border=1><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
  employees.forEach((element) => {
    table +=
      "<tr><td>" +
      element.id +
      "</td><td>" +
      element.name +
      "</td><td>" +
      element.salary +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("showOld").innerHTML = table;
}

function updateSalary() {
  let table =
    "<table border=1><tr><th>ID</th><th>Name</th><th>Salary</th><th>Updated Salary</th></tr>";
  try { 
    employees.forEach((element) => {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.salary +
        "</td><td>" +
        element.salary *1.10  +
        "</td></tr>";
    });
  } catch (exp) {
    document.getElementById("showNew").innerHTML = exp.message;
    return;
  }
  table += "</table>";
  document.getElementById("showNew").innerHTML = table;
}
