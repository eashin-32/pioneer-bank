//login page event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    var transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

  //----------deposit event handler---------------

const deposit = document.getElementById('depositBtn');
deposit.addEventListener('click', function () {
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber('depositAmount')

    updateSpanText('allDeposit', depositNumber)
    updateSpanText('currentBalance', depositNumber);




    document.getElementById('depositAmount').value = '';
})


 //-----------withdraw event handler-------------------

 const withdraw = document.getElementById('withdrawBtn');
 withdraw.addEventListener('click', function () {
     const withdrawAmount = getInputNumber('withdrawAmount');
   


    updateSpanText('currentWithdraw',withdrawAmount);
    updateSpanText('currentBalance', -1* withdrawAmount)

   

     document.getElementById('withdrawAmount').value = "";
 })
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

