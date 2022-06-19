function Employee(name, surname, base_salary, workexp){
    this.name = name;
    this.surname = surname;
    this.base_salary = base_salary;
    this.workexp = workexp;
}

Employee.prototype.countedSalary = function(workexp){
       let countedSalary = this.base_salary;
    
    if (workexp > 2 && workexp <=5){
        this.countedSalary +=  200;
    }
    if (workexp > 5){
        this.countedSalary  = this.countedSalary * 1.2 + 500;
    }
    return countedSalary;
}

function Developer(name, surname, base_salary, workexp){
  Employee.call(this, name, surname, base_salary, workexp);
}

function Designer(name, surname, base_salary, workexp, efficiency){
    this.efficiency = efficiency;
    Employee.call(this,name, surname, base_salary, workexp);  
}

Designer.prototype.countedSalary = function(){
    let countedSalary = Employee.prototype.countedSalary.call(this);
    this.countedSalary *= this.efficiency;
}

let count_des = count_dev = 0;


Manager.prototype.countedSalary = function(){
    let countedSalary = Employee.prototype.countedSalary.call(this);
    if (Managers.team.length > 5 && Managers.team.length <=10){
        countedSalary += 200;
    }
    if (team.length > 10){
        countedSalary += 300;
    }
    for (i=0;i<team.length;i++){
        if (typeof (this.team) == Designer){
           count_des++;
        }
    }
    for (i=0;i<team.length;i++){
        if (typeof(this.team) === Developer){
           count_dev++;
        }
    }
    if (count_dev > count_des){
        countedSalary =  countedSalary * 1.1;
    }
    return countedSalary;
}

function Manager (name, surname, base_salary, workexp, team){
    this.team = team;
    Employee.call(this, name, surname, base_salary, workexp);
}
function Department (){
    this.Managers = [];

}
Department.prototype.giveSalary = function(){

  this.Managers.forEach(function (Manager){Manager.giveSalary(); Manager.team.forEach(function(workers){workers.giveSalary()}) }) 
}

Employee.prototype.giveSalary = function(){
   
   return  console.log(`${this.name} ${this.surname} отримав(-ла) ${this.countedSalary()} шекелей`);
    }
  


Designer.prototype = Object.create(Employee.prototype);
Manager.prototype = Object.create(Employee.prototype);
Developer.prototype = Object.create(Employee.prototype);

let Yaroslav = new Designer("Ярослав","Варваров", 2000, 4, 1);
let Oksana = new Developer("Оксана","Анатоліївна", 2400, 1);
let Oleksii = new Developer("Олексій","Кравченко", 2100, 4);
let Vlad = new Designer("Влад","Чорнобокий", 2000, 2, 0.4);
let Liza = new Designer("Єлизавета","Репік", 2000, 3, 1);
let boss = new Manager("Анастасія", "Вікторівна", 7800, 6, [Yaroslav,Oksana,Oleksii,Vlad,Liza]);
let department = new Department();
department.Managers.push(boss);
department.giveSalary();