
let parent = document.getElementById("parent");
let para = document.getElementById("para");

// 1. innerHTML
para.innerHTML = "<b>Hello World</b>";

// 2. textContent
para.textContent = "Hello JS";

// 3. createElement()
let heading = document.createElement("h2");
heading.textContent = "Welcome to DOM Manipulation";
parent.appendChild(heading);

// 4. replaceChild()
let newHeading = document.createElement("h3");
newHeading.textContent = "Replace Heading";
parent.replaceChild(newHeading, heading);

// 5. removeChild()
parent.removeChild(newHeading);
