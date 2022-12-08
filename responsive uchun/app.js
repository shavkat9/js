// let user = new function() {
//     this.name = "John";
//     this.isAdmin = false;

// const { navigateDown } = require("reveal");

  
// }
// console.log(user);


// function User (name) {
   
//     this.name = name;
//     this.isAdmin = false;
  
// }
// console.log(User())

// let john = User("John"); 
// john = "Ali"
// alert(john);

// let user1 = new User; 

// let user2 = new User("ali");

// console.log(user1);

// let user = new function() {
//     this.name       = 'John'
//     this.isAdmin    = true
//     this.birthDate  = '01-01-1980'
//     const birthDate = new Date(this.birthDate)
  
//     this.age        = new Date().getFullYear() - birthDate.getFullYear()
//     this.isAdult    = this.age >= 18
//   }
//   console.log(user);

//   let user = {
//     age       : 30,
//     isAdult   : user.age >= 18

//   } // not working now

//   function ninjaFunction(elem) {
//     // 20 lines of code working with elem
  
//     elem = clone(elem);
  
//     // 20 more lines, now working with the clone of the elem!
//   }
//   ninjaFunction()

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
  
//     return {
//       father: man,
//       mother: woman
//     }
//   }
  
//   let family = marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   });
//   console.log(marry);

// function showPrimes(n) {
//     nextPrime:
//     for (let i = 2; i < n; i++) {
  
//       // check if i is a prime number
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert(i);
//     }
//   }
//  not working navigateDown;

// let user = {};

// alert(user.address ? user.address.street : undefined);

// set key
// localStorage.test = 2;

// // get key
// alert( localStorage.test ); // 2

// // remove key
// delete localStorage.test;

// set key
// localStorage.test = 2;

// // get key
// alert( localStorage.test ); // 2

// // remove key
// delete localStorage.test;

for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
  }
  issue