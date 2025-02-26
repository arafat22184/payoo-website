// Cash Out
document.getElementById('cashout-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const accountNumber = document.getElementById('cashout-account-number').value;
  const amount = getInputValueByID('cashout-amount');
  const pin = getInputValueByID('cashout-pin');
  const mainBalance = getInnerTextByID('main-balance');
  const selectedBank = document.getElementById('cashOut-allbank').value;
 
  if (selectedBank === 'Select a Bank') {
    alert('Please Select a Bank');
    return;
  }
  
  if (accountNumber) {
    if (amount) {
      if (amount > 0) {
        if (amount < mainBalance) {
        if (pin === 1234) {
      const sum = mainBalance - amount;
          setInnerTextByIdandValue('main-balance', sum)
          
          const container = document.getElementById('transaction-container');

          const div = document.createElement('div');
          div.innerHTML = `
          <div class="bg-base-100 border border-base-300 rounded-md">
          <div class="flex items-center p-2 gap-6">
            <div><img src="assets/wallet1.png" alt=""></div>
            <div>
              <p class="font-semibold">CashOut</p>
              <p>${amount}$ cashout to ${selectedBank} Account Number: ${accountNumber}</p>
              <p> ${formatDate()} </p>
            </div>
          </div>
          </div>
          `;
          container.appendChild(div);
    }
    else {
      alert("Wrong Pin");
    }
        }
        else {
          alert("you don't have enough balance")
        }
      }
      else {
        alert("amount minimum greater than 0")
      }
  }
  else {
    alert("enter amount")
  }
  }

  else {
    alert("Please Enter Account Number")
  }
}
);