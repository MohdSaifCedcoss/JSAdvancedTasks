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
  if (sal < 0 || sal == 0) {
    debugFun();
  } else {
    var employee = {
      id: ID,
      name: name,
      salary: sal,
    };
    employees.push(employee);
    display();
  }
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

debugFun = () => {
  debugger;
  alert("Please enter the salary greater than 0");
  return;
};
