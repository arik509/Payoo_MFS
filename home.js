const transactionData = [];

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

//Add Money section

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

    if(amount <= 0){
        alert('Invalid Amount');
        return;
    }

    if(pin != validPin){
        alert('Please Provide a valid pin number');
        return;
    }

    const availableBalance = getParseInnerText('available-balance');

    const totalNewBalance = amount+availableBalance;
    setBalance(totalNewBalance);

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})


// Cash Out Section

document.getElementById('btn-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber = getInnerValue('agent-number');
    const amount = getParseInnerValue('cash-out-amount');
    const pin = getParseInnerValue('pin-for-cashout');
    const validPin = 1234;

    const availableBalance = getParseInnerText('available-balance');
    
    if(agentNumber.length < 11){
        alert('Please Provide a valid agent number');
        return;
    }

    if(amount <=0 || amount >availableBalance){
        alert('Invalid amount');
    }

    if(pin != validPin){
        alert('Please Provide a valid pin number');
        return;
    }

    

    const totalNewBalance = availableBalance-amount;

    setBalance(totalNewBalance);

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
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

    const data = {
        name: "Money Transfer",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

//Get Bonus Section

document.getElementById('btn-bonus').addEventListener('click',function(e){
    e.preventDefault();
    const coupon = getInnerText('bonus-coupon');
    const validCoupon = "ABC50";

    
    const data = {
        name: "Get Bonus",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

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

    const data = {
        name: "Pay Bill",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

//Transaction Section

document.getElementById('transaction-button').addEventListener('click',function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ""
    

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class="flex justify-between items-center mt-3 gap-2 bg-white p-4 rounded-[12px]">
                <div class="flex gap-2 ">
                    <div class="p-3 rounded-full bg-[#0808080d]">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h1 class="text-[#080808b3] font-bold">${data.name}</h1>
                        <p class="text-[#080808b3]">Today ${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        ` 

        transactionContainer.appendChild(div)
    
    }
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

document.getElementById('transaction-button').addEventListener('click',function(){
    toggle('transaction-parent');
    toggleStyle('transaction-button');
})