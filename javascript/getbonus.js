document.getElementById('getbonus-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cupon = getInputValue('cupon-code');
    const amount = document.getElementById('amount').innerText;
    let newBallance = 0;
    for(let i = 100; i<=1000; i = i+100){
        if(cupon === `ph${i}`){
            newBallance = parseFloat(amount) + i;
            document.getElementById('amount').innerText = newBallance;
            alert(`congratulation. You have succssfully get bonus $${i}`)
            clear('cupon-code');
            return;
        }
    }
    alert('sorry worng cupon code');
    clear('cupon-code');
});