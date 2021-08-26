

function tip_button(clicked) {
    var bill = parseFloat(document.getElementById("total").value)
    var totalPeople = parseInt(document.getElementById("people").value)
    var finalTip = document.getElementById("tip-value")
    var finalTotal = document.getElementById("total-value")
    var buttonClicked = document.getElementById(clicked)
    var tipPercent = buttonClicked.value
    var allButtons = document.querySelectorAll("button")
    
    allButtons.forEach(button => {
        button.style.backgroundColor = "hsl(186, 14%, 43%)"
        button.style.color = "white"
    })
    buttonClicked.style.color = "black"
    buttonClicked.style.backgroundColor = "hsl(185, 41%, 84%)"
    
    
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