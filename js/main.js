var firstName = prompt("What is your first name?")

var lastName = prompt("What is your last name?")

var userAge = prompt("How old are you?")

greet();

function greet () {

	alert("Hello, " + firstName + " " + lastName + "!" + " You are " + (userAge * 12) + " months old and " + (userAge * 365) + " days old!");

}