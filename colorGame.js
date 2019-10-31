var numSquares=6;
var colors=makeArray(6);

var pickedColor=pickColor();

var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var square=document.querySelectorAll(".square");

var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;

var messageDisplay=document.querySelector("#message");

var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=makeArray(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.backgroundColor=colors[i];
		}
		else{
			square[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	resetButton.textContent="click to reset";
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=makeArray(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
			square[i].style.backgroundColor=colors[i];
			square[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	resetButton.textContent="click to reset";
});

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];

	//add event listeners
	square[i].addEventListener("click",function(){
		//alert("clicked on one of the squares");

		var clickedColor=this.style.backgroundColor;

		if(clickedColor===pickedColor){
			var correctColorSelected=document.querySelectorAll(".square");
			for(var i=0;i<correctColorSelected.length;i++){
				correctColorSelected[i].style.backgroundColor=clickedColor;
			}
			messageDisplay.textContent="correct!"
			h1.style.backgroundColor=pickedColor;
			// messageDisplay.textContent="play again?";
			resetButton.textContent="play again?";
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="try again!"
		}
	});

	}

	function pickColor(){
		var random=Math.floor(Math.random()*colors.length);
		return colors[random];
	}

	function makeArray(num){
		// initialise an empty array
		var arr=[];
		// loop through num times
		for(var i=0;i<num;i++){
			// generate a color
			var generatedColor=makeColor();
			arr.push(generatedColor);
		}
		//return the array
		return arr;
	}

	function makeColor(){
		//make red 
		var red=Math.floor(Math.random() * 256);
		// make green
		var green=Math.floor(Math.random() * 256);
		// make blue
		var blue=Math.floor(Math.random() * 256);

		return ("rgb("+red+", "+green+", "+blue+")");
		// console.log("rgb("+red+", "+green+", "+blue+")");
	}

resetButton.addEventListener("click",function(){
	// alert("reset clicked");
	colors=makeArray(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="click to reset";
	messageDisplay.textContent="";
	// hardBtn.classList.add("selected");
	// easyBtn.classList.remove("selected");
});