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

function getInnerText(id){
    const getElement = document.getElementById(id)
    const getText = getElement.innerText;
    return getText;
}

function setBalance(value){
    const balanceElement = document.getElementById('available-balance');
    balanceElement.innerText = value;
}

function toggle(id){
    const forms = document.getElementsByClassName('form');

    for(const form of forms){
        form.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

function toggleStyle(id){
    const formBtns = document.getElementsByClassName("form-button");
    
    for(const fbtn of formBtns){
        fbtn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
        fbtn.classList.add("border-[#0808081a]");
    }

    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]");

    document.getElementById(id).classList.remove("border-[#0808081a]");
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

//Get Bonus Section

document.getElementById('btn-bonus').addEventListener('click',function(e){
    e.preventDefault();
    const coupon = getInnerText('bonus-coupon');
    const validCoupon = "ABC50";

    if(coupon !== validCoupon){
        alert('Please Provide a valid coupon');
        return;
    }

})

//Pay bill Section

document.getElementById('btn-pay-money').addEventListener('click',function(e){
    e.preventDefault();
    const accountNumber = getInnerValue('account-number-pay');
    const amount = getParseInnerValue('pay-amount');
    const pin = getParseInnerValue('pay-pin');
    const validPin = 1234;

    if(accountNumber.length < 11){
        alert('Please Provide a valid account number');
        return;
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
    toggle('add-money-parent');
    toggleStyle('add-money-button');
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    toggle('cash-out-parent');
    toggleStyle('cash-out-button');
})

document.getElementById('transfer-money-button').addEventListener('click',function(){
    toggle('transfer-money-parent');
    toggleStyle('transfer-money-button');
})

document.getElementById('get-bonus-button').addEventListener('click',function(){
    toggle('get-bonus-parent');
    toggleStyle('get-bonus-button');
})

document.getElementById('pay-bill-button').addEventListener('click',function(){
    toggle('pay-bill-parent');
    toggleStyle('pay-bill-button');
})