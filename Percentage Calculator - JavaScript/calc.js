var num1 = document.getElementById('inputNum1');
var num2 = document.getElementById('inputNum2');
var choice = document.getElementById('selectDropDown');
var inputForm = document.getElementById('percentageForm');
var result = document.getElementById('resultHeader');

inputForm.addEventListener('submit', function(event) {
    if (!num1.value || !num2.value) {
        alert("Please enter values");
    }
    else {
        var a = parseFloat(num1.value);
        var b = parseFloat(num2.value);

        var x = a / b * 100;
        result.innerText = "Answer : " + x + "%";
    }
    event.preventDefault();
});