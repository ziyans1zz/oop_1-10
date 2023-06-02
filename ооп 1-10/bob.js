//1
// class Employee { 
//     name; 
//     age; 
//     salary; 
//     result(){ 
//         return `kitty`
//     } 

// }

// // // //2
// let flower = new Employee 
// flower.name = `flower`
// flower.age = `40`
// flower.salary = `20000 ` 
 
// let turtle = new Employee 
// turtle.name = `turtle`
// turtle.age = `13 `
// turtle.salary = `500000` 
 
// let luka = new Employee 
// luka.name = `luka` 
// luka.age = `150`
// luka.salary = `0`

// document.write( flower.name, " ", flower.age, " ", flower.salary) 
// let sum =  +luka.salary +  +turtle.salary +  +flower.salary + ` ` + `RUB`
// console.log(sum) 
// console.log(flower.result())

// // //3
// class Employee{
//     show(name, salary){
//         return name + ` ` + salary
//     }
// }
// let user = new Employee;
// console.log(user.show(`flower`, `3`))

// // //4
// class Employee{
//     show(){
//         console.log(this.name)
//         console.log(this.salari)
//     }
// }
// let user = new Employee;
// user.name = `flower`;
// user.salari = `3 `;
// user.show()

// //5
// class User {
// 	show() {
// 		return this.cape(this.name);
// 	}	
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new User
// user.name = `flower`
// console.log(user.show())

// //6
// class Student{
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);

//     ins()
//     }

// }


// //7
// let user = new Student;
// user.name = `flower`;
// user.surn = `ayvazovskiy`;
// console.log(user.names())
// console.log(user.surns())

// //8
// class Student{
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase();
// 	}
// }
// let user = new Student;
// user.name = `flower`;
// user.surn = `ayvazovskiy`;
// console.log(user.names() + user.surns())

// //9
// class Student{
//     name = 'flower';
//     surn = `ayvazovskiy`;
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new Student;
// console.log(user.names())
// console.log(user.surns())

// //10
// class Employee{
//     constructor(){
//         console.log(`ПИПИСЬКА`)
//     }
// }
// new Employee;