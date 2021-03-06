var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	setUpModeButtons()
	setUpSquares();
	reset();



function setUpModeButtons(){
for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();

			//figure out many squares to show
			//pick new colors
			//pick a new pickedColor
		});
	}
}
function setUpSquares(){
for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}
	})
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	//change colors of squares
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.background = "none";
		}
		
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener('click', function() {
	reset();
})

colorDisplay.textContent = pickedColor;


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color 
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		//get random color and pust into arr
		arr.push(randomColor());

	}
	return arr
}
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//pick a " green " 0 - 256
	var g = Math.floor(Math.random() * 256); 

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
}
