let arr = [10,20,30,40,50];

console.log("Original:",arr);

arr.push(50);
console.log("Push:",arr);

arr.pop();
console.log("pop:",arr);

arr.unshift(5);
console.log("unshift:",arr);

arr.shift();
console.log("shift :",arr);

arr.splice(1,1,25);
console.log("splice: ",arr);

console.log(" Before slice: ",arr.slice(1,3));
console.log(" Afeter slice: ",arr);


