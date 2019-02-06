for (var i = 1; i < 4; i++) {
    var button = document.createElement("button");
    var text = document.createTextNode("Button " + i);
    button.appendChild(text);
    document.getElementById("container").appendChild(button);
}
var button = ["green","red","blue"]
document.getElementsByTagName("button")[0].id = "button1";
document.getElementsByTagName("button")[1].id = "button2";
document.getElementsByTagName("button")[2].id = "button3";
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var bgc = document.body;
bgc.style.backgroundColor = "grey";

button1.style.backgroundColor = "green";
button2.style.backgroundColor = "red";
button3.style.backgroundColor = "blue";

button1.onclick = green;
button2.onclick = red;
button3.onclick = blue;

function green() {
    bgc.style.backgroundColor = "lime";
}
function red() {
    bgc.style.backgroundColor = "crimson";
}
function blue() {
    bgc.style.backgroundColor = "#0047ab";
}