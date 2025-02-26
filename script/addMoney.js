// Add Money
document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  const accountNumber = getInputValueByID('account-number');
  const amount = getInputValueByID('amount');
  const pin = getInputValueByID('pin');
  const mainBalance = getInnerTextByID('main-balance');

  if (amount) {
    if (accountNumber) {
      if (pin === 1234) {
      const sum = mainBalance + amount;
        document.getElementById('main-balance').innerText = sum;
        setInnerTextByIdandValue('main-balance', sum)
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