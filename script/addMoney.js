// Add Money
document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById('account-number').value;
  const amount = getInputValueByID('amount');
  const pin = getInputValueByID('pin');
  const mainBalance = getInnerTextByID('main-balance');
  const selectedBank = document.getElementById('allbank').value;
 
  if (selectedBank === 'Select a Bank') {
    alert('Please Select a Bank');
    return;
  }

  if (amount) {
    if (amount > 0) {
      if (accountNumber.length >= 11) {
        if (pin === 1234) {
          const sum = mainBalance + amount;
          document.getElementById('main-balance').innerText = sum;
          setInnerTextByIdandValue('main-balance', sum);

          const container = document.getElementById('transaction-container');

          const div = document.createElement('div');
          div.innerHTML = `
          <div class="bg-base-100 border border-base-300 rounded-md">
          <div class="flex items-center p-2 gap-6">
            <div><img src="assets/wallet1.png" alt=""></div>
            <div>
              <p class="font-semibold">Add money</p>
              <p>$${amount} added From ${selectedBank} Account Number: ${accountNumber}</p>
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
        alert("Please Enter Account Number");
      }
    }
    else{alert("amount minimum greater than 0")}
  }
  else {
    alert("Please enter Amount");
  }
}
);