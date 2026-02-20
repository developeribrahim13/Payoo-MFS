document.getElementById('sendmoney-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const sendmoneyAgentNumber = getInputValue('sendmoney-number');
    if(sendmoneyAgentNumber.length != 11)
    {
        alert('please give a valid agent number');
        clear('sendmoney-number');
        clear('sendmoney-amount');
        clear('sendmoney-pin');
        return;
    }
    const sendmoneyAmount = getInputValue('sendmoney-amount');
    const sendmoneyPin = getInputValue('sendmoney-pin');
    if(sendmoneyPin != 1234)
    {
        alert('please give a valid pin number')
        clear('sendmoney-number');
        clear('sendmoney-amount');
        clear('sendmoney-pin');
        return;
    }
    const amount = document.getElementById('amount').innerText;
    const newBallance = parseFloat(amount) - parseFloat(sendmoneyAmount);
    if(newBallance>=0)
    {
    document.getElementById('amount').innerText = newBallance;
        alert(`congratulations! You have successfully Transfer $${sendmoneyAmount} to ${sendmoneyAgentNumber}. Remaining Ballance: $${newBallance}`);
        clear('sendmoney-number');
        clear('sendmoney-amount');
        clear('sendmoney-pin');
        return;
    }
    else{
        alert('you dont have enough ballance');
        clear('sendmoney-number');
        clear('sendmoney-amount');
        clear('sendmoney-pin');
        return;
    }
})