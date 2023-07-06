
let person = prompt("Ismingizni kiriting");
while (person == 0 || !isNaN(person)){
    person = +prompt("Ismingizni kiriting");
}
function enterYear(currentYear,birthYear){
    while(currentYear == 0 || isNaN(currentYear)){
        currentYear = +prompt("hozirgi yilni kiriting");
    };
    while(birthYear == 0 || isNaN(birthYear)){
        birthYear = +prompt("tug'ilgan yilingizni kiriting");
    };
    ageOfPerson = currentYear - birthYear;
};
enterYear(+prompt("hozirgi yilni kiriting"), +prompt("tugilgan yilingizni kiriting"));
console.log(person + " sizning yoshingiz " + ageOfPerson + ".");