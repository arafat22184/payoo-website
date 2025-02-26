document.getElementById("login-btn")
  .addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const convertedAccountNumber = parseInt(accountNumber);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    if (convertedAccountNumber === 11020304050) {

      if (convertedPin === 1234) {
        window.location.href = "./main.html"
      }
      else {
        alert("Invalid Pin");
      }
    }
    else {
      alert("need valid account number");
    }
  });

document.getElementById('forgot-pin').addEventListener('click', function () {
    alert(`please contact Admin`)
  })

