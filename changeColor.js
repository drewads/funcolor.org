
let colorButton = document.getElementById("colorButton");

colorButton.onclick = function(){changeColor();}

let colorList = ["#5991ea", "#ff6363", "#96c6cc", "#ad7d4a", "#ffef77", "#85b27b", "#ad96cc"];

let previousIndex = 0;

function changeColor(){
	let index = Math.floor(Math.random()*colorList.length);
	if (index == previousIndex)
	{
		changeColor();
	}
	else
	{
		previousIndex = index;
		document.body.style.backgroundColor = colorList[index];
	}
}