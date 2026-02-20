document.getElementById('paybill-btn').addEventListener('click', function(event){
    event.preventDefault();
    const paybillBank = getInputValue('paybill-bank');
    if(paybillBank === 'Select a bank'){
        alert('please select a bank account');
        clear('biller-account-number');
        clear('pay-amount');
        clear('paybill-pin');
        return;
    }
    const paybillAcNumber = getInputValue('biller-account-number');
    if(paybillAcNumber.length !== 11)
    {
        alert('Please input a valid AC Number');
        document.getElementById('paybill-bank').value = 'Select a bank';
        clear('biller-account-number');
        clear('pay-amount');
        clear('paybill-pin');
        return;
    }
    const paybillAmount = getInputValue('pay-amount');
    const paybillPIN = getInputValue('paybill-pin');
    if(paybillPIN != 1234)
    {
        alert('Please give the valid Pin Number')
        document.getElementById('paybill-bank').value = 'Select a bank';
        clear('biller-account-number');
        clear('pay-amount');
        clear('paybill-pin');
        return;
    }
    const Amount = document.getElementById('amount').innerText;
    const newBallance = parseFloat(Amount) + parseFloat(paybillAmount);
    document.getElementById('amount').innerText = newBallance;
      alert(`congratulations! You have successfully payed $${paybillAmount} to ${paybillBank}. New Ballance is: $${newBallance}`);
    document.getElementById('paybill-bank').value = 'Select a bank';
        clear('biller-account-number');
        clear('pay-amount');
        clear('paybill-pin');
});