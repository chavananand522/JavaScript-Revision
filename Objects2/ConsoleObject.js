console.log("Normal Message");
console.info("Info Message");
console.warn("Warning!");
console.error("error");
console.table([{name:"Ajay",age:21},{name:"Dipak",age:21}]);
console.time("loop");
for (let i = 0; i<=1000000;i++){}
console.timeEnd("loop");
console.group("Group");
console.log("Inside group");
console.log("Inside box");
console.log("Inside container");
console.log("Inside group");
console.groupEnd();