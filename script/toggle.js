document.getElementById('transaction').style.display = "block";

document.getElementById('add-money-box').addEventListener("click", function (event) {
  document.getElementById('addmoney').style.display = "block";
  document.getElementById('cashout').style.display = "none";
  document.getElementById('transfer-money').style.display = "none";
  document.getElementById('getBonus').style.display = "none";
  document.getElementById('payBill').style.display = "none";
  document.getElementById('transaction').style.display = "none";
})

document.getElementById('cashout-box').addEventListener("click", function (event) {
  document.getElementById('cashout').style.display = "block";
  document.getElementById('addmoney').style.display = "none";
  document.getElementById('transfer-money').style.display = "none";
  document.getElementById('getBonus').style.display = "none";
  document.getElementById('payBill').style.display = "none";
  document.getElementById('transaction').style.display = "none";
})

document.getElementById('transfer-money-box').addEventListener("click", function (event) {
  document.getElementById('transfer-money').style.display = "block";
  document.getElementById('addmoney').style.display = "none";
  document.getElementById('cashout').style.display = "none";
  document.getElementById('getBonus').style.display = "none";
  document.getElementById('payBill').style.display = "none";
  document.getElementById('transaction').style.display = "none";
  
})
document.getElementById('get-bonus-box').addEventListener("click", function (event) {
  document.getElementById('getBonus').style.display = "block";
  document.getElementById('addmoney').style.display = "none";
  document.getElementById('cashout').style.display = "none";
  document.getElementById('transfer-money').style.display = "none";
  document.getElementById('payBill').style.display = "none";
  document.getElementById('transaction').style.display = "none";
})
document.getElementById('pay-bill-box').addEventListener("click", function (event) {
  document.getElementById('payBill').style.display = "block";
  document.getElementById('addmoney').style.display = "none";
  document.getElementById('cashout').style.display = "none";
  document.getElementById('transfer-money').style.display = "none";
  document.getElementById('getBonus').style.display = "none";
  document.getElementById('transaction').style.display = "none";
})
document.getElementById('transactions-box').addEventListener("click", function (event) {
  document.getElementById('transaction').style.display = "block";
  document.getElementById('addmoney').style.display = "none";
  document.getElementById('cashout').style.display = "none";
  document.getElementById('transfer-money').style.display = "none";
  document.getElementById('getBonus').style.display = "none";
  document.getElementById('payBill').style.display = "none";
})