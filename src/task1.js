let employees = [];
function addData() {
  let ID = document.getElementById("empId").value;
  let name = document.getElementById("empName").value;
  let sal = document.getElementById("empSalary").value;
  var employee = {
    id: ID,
    name: name,
    salary: sal,
  };
  employees.push(employee);
  display();
}

export function display() {
  let table =
    "<table><tr><th>ID</th><th>Name</th><th>Salary</th><th>Action</th></tr>";
  employees.forEach((element) => {
    table +=
      '<tr><td>' +
      element.id +
      '</td><td>' +
      element.name +
      '<td><td>' +
      element.salary +
      '</td><td><button onclick="deleteData(\' '+element.id+'\')">Delete</button></td></tr>';
  });
  table += "</table>";
  document.getElementById("showRes").innerHTML = table;
}

function deleteData(uid){
    uid=Number(uid);
    for(let i=0;i<employees.length;i++){
        console.log(employees[i].id);
        if(employees[i].id==uid){
            console.log("In if");
            employees.splice(i,1);
        }
    }
    display();
}


