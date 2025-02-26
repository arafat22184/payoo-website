// Transfer Money
document.getElementById('transfer-money-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const accountNumber = document.getElementById('transfer-account-number').value;
  const amount = getInputValueByID('tansfer-amount');
  const pin = getInputValueByID('transfer-pin');
  const mainBalance = getInnerTextByID('main-balance');
  const selectedBank = document.getElementById('transfer-allbank').value;
 
  if (selectedBank === 'Select a Bank') {
    alert('Please Select a Bank');
    return;
  }
  
  if (accountNumber.length >= 11) {
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
              <p class="font-semibold">Transfer Money</p>
              <p>${amount}$ transfer to ${selectedBank} Account Number: ${accountNumber}</p>
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
    alert("Please Enter Valid Account Number")
  }
}
);