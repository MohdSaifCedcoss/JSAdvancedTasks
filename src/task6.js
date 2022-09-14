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

fun=()=>{
    let text="<table border=1><tr><th>Name</th><th>Salary</th></tr>"
    for(let i=0;i<employees.length;i++){
        let sal=0.15*employees[i].salary;
        text+="<tr><td>"+ employees[i].name+"</td><td>"+ sal+"</td></tr>"
    }
    text+="</table>";
    document.getElementById("showRes").innerHTML=text;
}