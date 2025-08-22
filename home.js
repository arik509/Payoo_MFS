document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = document.getElementById('add-pin').value;
    const validPin = 1234;

    if(accountNumber.length < 11){
        alert('Please Provide a valid account number');
        return;
    }

    if(amount < 500){
        alert('Minimum amount to add is 500');
    }

    if(pin != validPin){
        alert('Please Provide a valid pin number');
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const totalNewBalance = amount+availableBalance;
    document.getElementById('available-balance').innerText = totalNewBalance;
})

// Toggling

document.getElementById('add-money-button').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display = "none";

    document.getElementById('add-money-parent').style.display = "block";
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = "none";

    document.getElementById('cash-out-parent').style.display = "block";
})



// Cash Out Section

document.getElementById('btn-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const amount = parseInt(document.getElementById('cash-out-amount').value);
    const pin = document.getElementById('pin-for-cashout').value;
    const validPin = 1234;

    if(agentNumber.length < 11){
        alert('Please Provide a valid agent number');
        return;
    }

    if(amount < 500){
        alert('Minimum amount to add is 500');
    }

    if(pin != validPin){
        alert('Please Provide a valid pin number');
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const totalNewBalance = availableBalance-amount;

    
    document.getElementById('available-balance').innerText = totalNewBalance;
})
