document.getElementById('addmoney-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyBank = getInputValue('addmoney-bank');
    if(addMoneyBank === 'Select a bank'){
        alert('please select a bank account');
        clear('addmoney-account-number');
        clear('addmoney-amount');
        clear('addmoney-pin');
        return;
    }
    const addmoneyAcNumber = getInputValue('addmoney-account-number');
    if(addmoneyAcNumber.length !== 11)
    {
        alert('Please input a valid AC Number');
        document.getElementById('addmoney-bank').value = 'Select a bank';
        clear('addmoney-account-number');
        clear('addmoney-amount');
        clear('addmoney-pin');
        return;
    }
    const addmoneyAmount = getInputValue('addmoney-amount');
    const addmoneyPin = getInputValue('addmoney-pin');
    if(addmoneyPin != 1234)
    {
        alert('Please give the valid Pin Number')
        document.getElementById('addmoney-bank').value = 'Select a bank';
        clear('addmoney-account-number');
        clear('addmoney-amount');
        clear('addmoney-pin');
        return;
    }
    const Amount = document.getElementById('amount').innerText;
    const newBallance = parseFloat(Amount) + parseFloat(addmoneyAmount);
    document.getElementById('amount').innerText = newBallance;
      alert(`congratulations! You have successfully Add Money $${addmoneyAmount} from ${addmoneyAcNumber}. New Ballance is: $${newBallance}`);
    document.getElementById('addmoney-bank').value = 'Select a bank';
        clear('addmoney-account-number');
        clear('addmoney-amount');
        clear('addmoney-pin');
});