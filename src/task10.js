const employees = [];
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
var ob1 = new employee(2265, "Saif", 22212);
var ob2 = new employee(2266, "Abhishek", 19000);
var ob3 = new employee(2267, "Kaif", 21000);
var ob4 = new employee(2268, "Mudassir", 20000);
var ob5 = new employee(2269, "Shreya", 19000);

employees.push(ob1);
employees.push(ob2);
employees.push(ob3);
employees.push(ob4);
employees.push(ob5);
function showUpdated() {
  "use strict";
  employees.forEach(element => {
        element.salary=30000;
  });
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
  document.getElementById("showNew").innerHTML = table;
}
