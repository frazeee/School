<<<<<<< HEAD
function balanceCheck(){
   var balance = document.getElementById("currentBalance").textContent
    console.log(balance)

    const message = "Your current balance is: ₱ " + balance

    alert(message)

}

function withdrawCash(){
    let balanceDom = document.getElementById("currentBalance");
    let transactionAmountDom = document.getElementById("amountChange"); 
    let balance = document.getElementById("currentBalance").textContent
    let withdrawAmount = document.getElementById("amountChange").value
    console.log(withdrawAmount)
    console.log(balance)

    if (withdrawAmount > balance) {
        alert("Insufficient balance for this withdrawal.");
        return;  
    }
    
    let newBalance = parseFloat(balance) - parseFloat(withdrawAmount)
    console.log(newBalance)
    balanceDom.innerHTML = newBalance.toFixed(2)
    transactionAmountDom.value = 0


    alert("You withdrew ₱" + withdrawAmount)
    askForAnotherTransaction()
}

function depositCash(){
    let balanceDom = document.getElementById("currentBalance");
    let transactionAmountDom = document.getElementById("amountChange");
    let balance = document.getElementById("currentBalance").textContent
    let depositAmount = document.getElementById("amountChange").value
    console.log(depositAmount)
    console.log(balance)
    
    let newBalance = parseFloat(balance) + parseFloat(depositAmount)
    console.log(newBalance)
    balanceDom.innerHTML = newBalance.toFixed(2)
    transactionAmountDom.value = 0

    alert("You deposited ₱" + depositAmount)

    askForAnotherTransaction()
}

function askForAnotherTransaction(){
    let userResponse = confirm("Do you want to perform another transaction?");
    if (!userResponse) {
        // Reset the balance and transaction amount
        balanceDom.textContent = initialBalance.toFixed(2);
        transactionAmountDom.value = 0;
        alert("Thank you for using our service! Your balance has been reset.");
    }
=======
function balanceCheck(){
   var balance = document.getElementById("currentBalance").textContent
    console.log(balance)

    const message = "Your current balance is: ₱ " + balance

    alert(message)

}

function withdrawCash(){
    let balanceDom = document.getElementById("currentBalance");
    let transactionAmountDom = document.getElementById("amountChange"); 
    let balance = document.getElementById("currentBalance").textContent
    let withdrawAmount = document.getElementById("amountChange").value
    console.log(withdrawAmount)
    console.log(balance)

    if (withdrawAmount > balance) {
        alert("Insufficient balance for this withdrawal.");
        return;  
    }
    
    let newBalance = parseFloat(balance) - parseFloat(withdrawAmount)
    console.log(newBalance)
    balanceDom.innerHTML = newBalance.toFixed(2)
    transactionAmountDom.value = 0


    alert("You withdrew ₱" + withdrawAmount)
    askForAnotherTransaction()
}

function depositCash(){
    let balanceDom = document.getElementById("currentBalance");
    let transactionAmountDom = document.getElementById("amountChange");
    let balance = document.getElementById("currentBalance").textContent
    let depositAmount = document.getElementById("amountChange").value
    console.log(depositAmount)
    console.log(balance)
    
    let newBalance = parseFloat(balance) + parseFloat(depositAmount)
    console.log(newBalance)
    balanceDom.innerHTML = newBalance.toFixed(2)
    transactionAmountDom.value = 0

    alert("You deposited ₱" + depositAmount)

    askForAnotherTransaction()
}

function askForAnotherTransaction(){
    let userResponse = confirm("Do you want to perform another transaction?");
    if (!userResponse) {
        // Reset the balance and transaction amount
        balanceDom.textContent = initialBalance.toFixed(2);
        transactionAmountDom.value = 0;
        alert("Thank you for using our service! Your balance has been reset.");
    }
>>>>>>> 38d35f5 (Uploaded two new web pages.)
}