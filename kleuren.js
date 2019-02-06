var container = document.getElementById("container");
var body = document.getElementsByTagName("body")[0];
var colors = ["crimson","orange","pink","blueviolet","#0047ab","lime","darkgrey","black"];
var count = {};

for (var i = 1; i < 36; i++) {
    var button = document.createElement("button");
    button.innerHTML = i;
    button.id = "button" + i;
    count[button.id] = 0;
    container.appendChild(button);
    button.onclick = changeColor;
    button.style.border = "none";
    button.style.width = "100px";
    button.style.height = "60px";
    button.style.margin = "15px","15px","15px","15px";
    button.style.color = "white";
    button.style.backgroundColor = "green";
    button.style.fontSize = "20px";
}

function changeColor(event) {
	event.target.style.backgroundColor = colors[count[event.target.id]];
	count[event.target.id] = count[event.target.id] + 1;

	if (count[event.target.id] > colors.length){
		container.removeChild(event.target);
	}
}