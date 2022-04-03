function getInputValue(inputId){

    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;

}

function updateTotalField(totalField, amount){

    const totalElement = document.getElementById(totalField);
    const total = parseFloat(totalElement.innerText);
    totalElement.innerText = total + amount;

}
function getCurrentBalance(){
    const balance = document.getElementById('balance-total');
    const currentBalance = parseFloat(balance.innerText);

    return currentBalance;
}

function updateBalance(amount, isAdd){
    const balance = document.getElementById('balance-total');
    const currentBalance = getCurrentBalance();

    if(isAdd == true){
        balance.innerText = currentBalance + amount;
    }
    else{
        balance.innerText = currentBalance - amount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function(){

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You can not  withdraw more than what you have in your account');
    }
});