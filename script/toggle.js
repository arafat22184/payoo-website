handleToggle('transfer-money', 'block');

document.getElementById('add-money-box').addEventListener("click", function (event) {
  handleToggle('addmoney', 'block');
  handleToggle('cashout', 'none');
  handleToggle('transfer-money', 'none');
  handleToggle('getBonus', 'none');
  handleToggle('payBill', 'none');
  handleToggle('transaction', 'none');
})

document.getElementById('cashout-box').addEventListener("click", function (event) {
  handleToggle('cashout', 'block');
  handleToggle('addmoney', 'none');
  handleToggle('transfer-money', 'none');
  handleToggle('getBonus', 'none');
  handleToggle('payBill', 'none');
  handleToggle('transaction', 'none');
})

document.getElementById('transfer-money-box').addEventListener("click", function (event) {
  handleToggle('transfer-money', 'block');
  handleToggle('addmoney', 'none');
  handleToggle('cashout', 'none');
  handleToggle('getBonus', 'none');
  handleToggle('payBill', 'none');
  handleToggle('transaction', 'none');
  
})
document.getElementById('get-bonus-box').addEventListener("click", function (event) {
  handleToggle('getBonus', 'block');
  handleToggle('addmoney', 'none');
  handleToggle('cashout', 'none');
  handleToggle('transfer-money', 'none');
  handleToggle('payBill', 'none');
  handleToggle('transaction', 'none');
})
document.getElementById('pay-bill-box').addEventListener("click", function (event) {
  handleToggle('payBill', 'block');
  handleToggle('addmoney', 'none');
  handleToggle('cashout', 'none');
  handleToggle('transfer-money', 'none');
  handleToggle('getBonus', 'none');
  handleToggle('transaction', 'none');
})
document.getElementById('transactions-box').addEventListener("click", function (event) {
  handleToggle('transaction', 'block');
  handleToggle('addmoney', 'none');
  handleToggle('cashout', 'none');
  handleToggle('transfer-money', 'none');
  handleToggle('getBonus', 'none');
  handleToggle('payBill', 'none');
})