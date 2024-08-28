// Temperature Conversion Project

const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert() {
	if (toFahrenheit.checked) {
		temp = (Number(textBox.value) * 9) / 5 + 32;
		result.innerHTML = `${temp.toFixed(1)} °F`;
	}
	else if (toCelsius.checked) {
		temp = (Number(textBox.value) - 32) * 5 / 9;
		result.innerHTML = `${temp.toFixed(1)} °C`;
	}
	else {
		window.alert("Please select a unit to convert to");
	}
}