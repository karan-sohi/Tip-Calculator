

function tip_button(clicked) {
    var ButtonsDiv = document.getElementsByClassName("user")[0]
    var tipButtons = ButtonsDiv.getElementsByTagName("button")
    
    for (let i=0; i<tipButtons.length; i++) {
        tipButtons[i].style.backgroundColor = "hsl(186, 14%, 43%)"
        tipButtons[i].style.color = "white"
    }

    var tipButton = document.getElementById(clicked)
    tipButton.style.color = "black"
    tipButton.style.backgroundColor = "hsl(185, 41%, 84%)"
}



function resetFunc() {
    var ButtonsDiv = document.getElementsByClassName("user")[0]
    var tipButtons = ButtonsDiv.getElementsByTagName("button")
    
    for (let i=0; i<tipButtons.length; i++) {

        if (tipButtons[i].style.color == "black") {
            var clickedTip = tipButtons[i]
        }
    }

    var bill = parseFloat(document.getElementById("total").value)
    var totalPeople = parseInt(document.getElementById("people").value)
    var finalTip = document.getElementById("tip-value")
    var finalTotal = document.getElementById("total-value")
    var tipPercent = clickedTip.value

    
    // CALCULATIONS
    var tipValue = (tipPercent*bill)/100
    totalBill = bill + tipValue
    tipPerPerson = tipValue / totalPeople
    totalPerPerson = totalBill / totalPeople
    tipPerPerson = tipPerPerson.toFixed(2)
    totalPerPerson = totalPerPerson.toFixed(2)

    finalTip.innerHTML = "$" + tipPerPerson
    finalTotal.innerHTML = "$" + totalPerPerson

}