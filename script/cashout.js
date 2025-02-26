// Cash Out
document.getElementById('cashout-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const accountNumber = getInputValueByID('cashout-account-number');
  const amount = getInputValueByID('cashout-amount');
  const pin = getInputValueByID('cashout-pin');
  const mainBalance = getInnerTextByID('main-balance');

  
  if (accountNumber) {
    if (amount) {
    if (pin === 1234) {
      const sum = mainBalance - amount;
      setInnerTextByIdandValue('main-balance', sum)
    }
    else {
      alert("Wrong Pin");
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