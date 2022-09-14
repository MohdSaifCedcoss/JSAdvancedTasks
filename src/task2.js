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
var ob = new employee(2265, "Saif", "20000");

let table = "<table><tr><th>ID</th><th>Name</th><th>Salary</th><tr>";

table +=
  "<tr><td>" +
  ob.id +
  "</td><td>" +
  ob.name +
  "</td><td>" +
  ob.salary +
  "</td><tr></table>";

document.getElementById("showRes").innerHTML = table;
