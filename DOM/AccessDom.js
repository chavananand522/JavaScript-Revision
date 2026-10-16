// 1.getElementById
let h = document.getElementById("heading");
console.log(h.innerHTML);

// 2.getElementByClassName
let p= document.getElementsByClassName("info");
console.log(p[0].innerHTML);
console.log(p[1].innerHTML);


// 3.getElementByTagName
let t = document.getElementsByTagName("h2");
console.log(t[0].innerHTML);

// 4.querySelector
let q = document.querySelector(".info");
console.log(q.innerHTML);

// 5.querySelectorAll
let all = document.querySelectorAll(".info");
all.forEach(function(para){
    console.log(para.innerHTML);
});