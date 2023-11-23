
function calculate() {
    // Get the entered amount
    var inputAmount = document.querySelector("#input-amount").value;

    if (isNaN(inputAmount)) {
        alert("Please enter a valid number.");
        return;
    }

    var newAmount = parseFloat(inputAmount) * 1.0175;

    
    document.getElementById("result-text").innerHTML = "Rs = " + "<b>" + newAmount.toFixed(2); "</b>"
}