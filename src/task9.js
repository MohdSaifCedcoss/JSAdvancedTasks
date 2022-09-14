let employees = [];
function addData() {
  document.getElementById("erroMsg").style.display = "none";
  let ID = document.getElementById("empId").value;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id == ID) {
      document.getElementById("erroMsg").style.display = "block";
      document.getElementById("erroMsg").innerHTML =
        "ID already exists Please check and re-enter ID";
      return;
    }
  }
  let name = document.getElementById("empName").value;
  let sal = document.getElementById("empSalary").value;
  try {
    if (ID == "") throw "ID is empty";
    if (name == "" || !isNaN(name)) throw "Name is Empty or not string";
    if (sal == "") throw "Salary is empty";
  } catch (exp) {
    document.getElementById("erroMsg").style.display = "block";
    document.getElementById("erroMsg").innerHTML =
      "Check if any field is empty or name is a number";
    return;
  }
  var employee = {
    id: ID,
    name: name,
    salary: sal,
  };
  employees.push(employee);
  display();
}

function display() {
  let table =
    "<table border=1><tr><th>ID</th><th>Name</th><th>Salary</th><th>Action</th></tr>";
  employees.forEach((element) => {
    table +=
      "<tr><td>" +
      element.id +
      "</td><td>" +
      element.name +
      "</td><td>" +
      element.salary +
      "</td><td><button onclick=\"deleteData(' " +
      element.id +
      "')\">Delete</button></td></tr>";
  });
  table += "</table>";
  document.getElementById("showRes").innerHTML = table;
}

function deleteData(uid) {
  uid = Number(uid);
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id == uid) {
      employees.splice(i, 1);
    }
  }
  display();
}
