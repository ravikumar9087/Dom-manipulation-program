// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll
// array like object ---> indexing, length property

// let navItems = document.getElementsByTagName("a"); // html collection
// we cant use foreach loop method to iterate through html collection
// console.log(navItems);
// simple for loop
// for of loop
// for each loop

// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";  
// }

// for (const navItem of navItems) {
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";  
// }

// navItems = Array.from(navItems);// this is used for to run a for each loop  in which we changed the navItems (object) to (array)
// console.log(navItems);
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = "red";
//         navItem.style.color = "black";
//         navItem.style.fontWeight = "bold";
// });


const navItems = document.querySelectorAll("a"); // node list
console.log(navItems);
// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "blue";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";  
// }


// for (const navItem of navItems) {
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";  
// }

// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = "red";
//         navItem.style.color = "black";
//         navItem.style.fontWeight = "bold";
// });