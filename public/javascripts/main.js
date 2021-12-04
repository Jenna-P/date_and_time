
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();

document.querySelector(".time").innerHTML =  d.toLocaleTimeString();
}

function setAlarm() {
  
const textArea = document.querySelector("#showAlarm");
const hour = document.querySelector("#hours").value;
const min = document.querySelector("#minuts").value;
const sec = document.querySelector("#seconds").value;
textArea.value = hour + " : " + min + " : " + sec;

}