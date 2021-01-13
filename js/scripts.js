//Business Logic:

const add = function add(number1, number2) {
	return number1 + number2;
}
const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface logic

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#add1").val());
		const number2 = parseInt($("#add2").val());
		const result = add(number1, number2);
		$("#outputAdd").text(result);	
	});
	$("form#subtract").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#subtract1").val());
		const number2 = parseInt($("#subtract2").val());
		const result = subtract(number1, number2);
		$("#outputSubtract").text(result);	
	});
	$("form#multiply").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#multiply1").val());
		const number2 = parseInt($("#multiply2").val());
		const result = multiply(number1, number2);
		$("#outputMultiply").text(result);	
	});
	$("form#divide").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#divide1").val());
		const number2 = parseInt($("#divide2").val());
		const result = divide(number1, number2);
		$("#outputDivide").text(result);	
	});
});
