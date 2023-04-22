
class Employee {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary (){
        return (this.rate * this.days) * 0.63; //Налоги же еще!//
    }
}

let employee = new Employee("Alexey", "Sitnikov", 300, 21);

console.log(employee.name);
console.log(employee.surname);
console.log(employee.rate);
console.log(employee.days);
console.log(employee.getSalary());