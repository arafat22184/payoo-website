// Get Bonus
document.getElementById('getBonus-btn').addEventListener('click', function (event) {
  event.preventDefault();
  const getBonusCoupon = document.getElementById('getbonus-coupon').value;
  const coupon = 'arafat10';
  const mainBalance = getInnerTextByID('main-balance');

  if(getBonusCoupon === coupon){
    const sum = mainBalance + 1500;
          document.getElementById('main-balance').innerText = sum;
    setInnerTextByIdandValue('main-balance', sum);
    
    alert(`Congrats you get 1500$ bonus$`);

          const container = document.getElementById('transaction-container');

          const div = document.createElement('div');
          div.innerHTML = `
          <div class="bg-base-100 border border-base-300 rounded-md">
          <div class="flex items-center p-2 gap-6">
            <div><img src="assets/wallet1.png" alt=""></div>
            <div>
              <p class="font-semibold">Get Bonus</p>
              <p>1500$ added From Coupon</p>
            </div>
          </div>
          </div>
          `;
          container.appendChild(div);
  }
  else {
    alert('Sorry invalid coupon')
  }
}
);