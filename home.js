function getParseInnerValue(id){
    const getElement = document.getElementById(id)
    const getValue = getElement.value;
    const getNumber = parseInt(getValue);
    return getNumber;
}

function getInnerValue(id){
    const getElement = document.getElementById(id)
    const getValue = getElement.value;
    return getValue;
}

function getParseInnerText(id){
    const getElement = document.getElementById(id)
    const getValue = getElement.innerText;
    const getText = parseInt(getValue);
    return getText;
}

function setBalance(value){
    const balanceElement = document.getElementById('available-balance');
    balanceElement.innerText = value;
}

document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();
    const bank = getInnerValue('bank');
    const accountNumber = getInnerValue('account-number');
    const amount = getParseInnerValue("add-amount");
    const pin = getParseInnerValue('add-pin');
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

    const availableBalance = getParseInnerText('available-balance');

    const totalNewBalance = amount+availableBalance;
    setBalance(totalNewBalance);
})


// Cash Out Section

document.getElementById('btn-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber = getInnerValue('agent-number');
    const amount = getParseInnerValue('cash-out-amount');
    const pin = getParseInnerValue('pin-for-cashout');
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

    const availableBalance = getParseInnerText('available-balance');

    const totalNewBalance = availableBalance-amount;

    
    setBalance(totalNewBalance);
})


//transfer money section

document.getElementById('btn-transfer').addEventListener('click',function(e){
    e.preventDefault();
    const accountNumber = getInnerValue('account-number-trans');
    const amount = getParseInnerValue('amount-trans');
    const pin = getParseInnerValue('pin-for-trans');
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

    const availableBalance = getParseInnerText('available-balance');

    const totalNewBalance = availableBalance-amount;

    
    setBalance(totalNewBalance);
})



// Toggling

document.getElementById('add-money-button').addEventListener('click',function(){
    
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }

    document.getElementById('add-money-parent').style.display = "block";
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }

    document.getElementById('cash-out-parent').style.display = "block";
})

document.getElementById('transfer-money-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }

    document.getElementById('transfer-money-parent').style.display = "block";
})