let calculateTotal = (java, js, html, css, sql) => {
    return java + js + html + css + sql;
}

let calculatePercentage = (total) => {
    return total / 5;
}

let calculateGrade = (percentage) => {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 75) {
        return "A";
    } else if (percentage >= 60) {
        return "B";
    } else if (percentage >= 35) {
        return "C";
    } else {
        return "F";
    }
};

let total = calculateTotal(90, 80, 70, 85, 95);
let percentage = calculatePercentage(total);
let grade = calculateGrade(percentage);

console.log("Total:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
