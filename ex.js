
//----------------------------------------------------------------------------------------------
var btn = document.getElementById('btn');
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlenght(){
	return input.value.length;
}
function creatlistelemnt(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
function additemclick(){

	if(inputlenght() > 0) {
		creatlistelemnt();
};}
function additemkeypress(event){

		if(inputlenght() > 0 && event.keyCode === 13){
				creatlistelemnt();

}
;}

btn.addEventListener("click",additemclick);
input.addEventListener("keypress" , additemkeypress);



/*cat*/

function driverChec() {

	var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
var driverChec2 = function driverChec() {

	var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
function driverChec3(age) {

if (Number(age) < 18) {
	console.log("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	console.log("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
}
/*login*/
var database= [
	{
	username: "hamza",
	password:"hamza2255"
},
{
	username: "hamza2",
	password:"abc"
},
{
	username: "hamza3",
	password:"123"
}

];
var newsfeed= [
			{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}

	 ];
var userP = prompt('please enter your username');
var passP = prompt('please enter your username');


function ValidUser(user,pass) {
		for ( var i=0; i < database.length ; i++) {
			if (user===database[i].username && pass===database[i].password){
			return true;
		}
		
}return false;
};

function logIn(username,password) {
		if (ValidUser(username,password)){
			console.log(newsfeed);
		}else{ alert("incorect usernamee or password")};
}

 logIn(userP,passP);
