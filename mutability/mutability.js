const person = {
   name: 'Rick',
   age: 77,
   country: 'US',
}

let clone1 = {...person};
let clone2 = {...person};
let samePerson = person;

console.log("Person before changes:", person.name);
console.log("clone1 before changes:", clone1.name);
console.log("clone2 before changes:", clone2.name);
console.log("samePerson before changes:", samePerson.name, '\n');

person.name = "Paul";

console.log("Person After Paul changes:", person.name);
console.log("clone1 After Paul changes:", clone1.name);
console.log("clone2 After Paul changes:", clone2.name);
console.log("samePerson After Paul changes:", samePerson.name, '\n');

clone1.name = "John";

console.log("Person After John changes:", person.name);
console.log("clone1 After John changes:", clone1.name);
console.log("clone2 After John changes:", clone2.name);
console.log("samePerson After John changes:", samePerson.name, '\n');

