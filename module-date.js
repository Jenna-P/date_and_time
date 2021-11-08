function getDate() {
const d = new Date();
let year = d.getFullYear();
let day = d.getDay();
const monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
let month = monthArray[d.getMonth()];

let date = day + " - " + month + " - " + year;
console.log(date);
return date;
//document.querySelector(".date").innerHTML = day + " - " + month + " - " + year;
}

module.exports.getDate = getDate;