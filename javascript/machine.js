function getInputValue (id){
    const value = document.getElementById(id).value;
    return value;
};

function clear(id){
    document.getElementById(id).value='';
};

function showOn(id)
{
    document.getElementById('add-money-bar').classList.add('hidden');
    document.getElementById('cashout-bar').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}