//  1. Document Node
console.log("Document Node:", document);  

// 2. Element Node
let heading = document.getElementById("heading");
console.log("Element Node: ",heading);

// 3. Attribute Node 
console.log("Attribute Node: ",heading.getAttributeNode("id"));

// 4.Text Node
console.log("Text Node: ",heading.firstChild);

// 5.Comment Node
console.log("Comment Node: ",document.body.childNodes[1]);
