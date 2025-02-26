// Cash Out
document.getElementById('pay-bill-btn').addEventListener('click', function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById('payBill-account-number').value;
  const amount = getInputValueByID('payBill-amount');
  const pin = getInputValueByID('payBill-pin');
  const mainBalance = getInnerTextByID('main-balance');
  const selectBiller = document.getElementById('select-Biller').value;
 
  if (selectBiller === 'Select Biller') {
    alert('Please Select a Biller');
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
              <p class="font-semibold">Pay Bill</p>
              <p>${amount}$ Pay Bill to ${selectBiller} Account Number: ${accountNumber}</p>
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