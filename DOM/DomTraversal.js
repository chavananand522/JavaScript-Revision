let parent = document.getElementById("parent");
let child = document.getElementById("heading");
let sibling1 = document.getElementById("para1");
let sibling2 = document.getElementById("para2");

// 1. Parent Traversal 
console.log("Parent: ",heading.parentElement);

// 2. Child Traversal 
console.log("First Child: ",parent.firstElementChild);
console.log("Last Child: ",parent.lastElementChild);

// 3. Sibling Traversal
console.log("Next Element: ",para1.nextElementSibling);
console.log("Previous Element: ",para2.previousElementSibling);
