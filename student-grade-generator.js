//score indicates the marks the student scored in number form
//grade shows the cluster of the score, represented by letters

function gradeGenerator() {
const score = Number(prompt("Input score: 0-100"))
//for it to run in the code runner to test the code by manually inputting values, 
//the code below would be used instead of the one above

/* 
In the beginning:
function gradeGenerator(score) {
if...}

Bottom of code
gradeGenerator(manually input a number e.g. 30); 

output will be E
*/

if (score > 79) {
    grade = "A"
}

else if (score <= 79 && score >= 60) {
    grade = "B"
}

else if (score < 60 && score >= 50) {
    grade = "C"
}

else if (score < 50 && score >= 40) {
    grade = "D"
}

else if (score < 40) {
    grade = "E"
}
console.log(grade)
}

gradeGenerator();