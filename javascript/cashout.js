document.getElementById('withdraw-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashoutAgentNumber = getInputValue('cashout-agent-number');
    if(cashoutAgentNumber.length != 11)
    {
        alert('please give a valid agent number');
        clear('cashout-agent-number');
        clear('cashout-amount');
        clear('cashout-pin');
        return;
    }
    const cashoutAmount = getInputValue('cashout-amount');
    const cashoutPin = getInputValue('cashout-pin');
    if(cashoutPin != 1234)
    {
        alert('please give a valid pin number')
        clear('cashout-agent-number');
        clear('cashout-amount');
        clear('cashout-pin');
        return;
    }
    const amount = document.getElementById('amount').innerText;
    const newBallance = parseFloat(amount) - parseFloat(cashoutAmount);
    if(newBallance>=0)
    {
    document.getElementById('amount').innerText = newBallance;
        alert(`congratulations! You have successfully withdrawn $${cashoutAmount} to ${cashoutAgentNumber}. Remaining Ballance: $${newBallance}`);
        clear('cashout-agent-number');
        clear('cashout-amount');
        clear('cashout-pin');
        return;
    }
    else{
        alert('you dont have enough ballance');
        clear('cashout-agent-number');
        clear('cashout-amount');
        clear('cashout-pin');
        return;
    }
})