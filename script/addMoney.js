// Add Money
document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById('account-number').value;
  const amount = document.getElementById('amount').value;
  const convertedAmount = parseFloat(amount);
  const pin = document.getElementById('pin').value;
  const convertedPin = parseInt(pin);
  const mainBalance = document.getElementById('main-balance').innerText;
  const convertedMainBalance = parseFloat(mainBalance);

  if (amount) {
    if (accountNumber) {
      if (convertedPin === 1234) {
      const sum = convertedMainBalance + convertedAmount;
      document.getElementById('main-balance').innerText = sum;
    }
    else {
      alert("Wrong Pin");
    }
    }
    else {
      alert("Please Enter Account Number")
    }
  }
  else {
    alert("Please enter Amount")
  }
}
);