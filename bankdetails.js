//common variable initialization
var DepTotal= 0;
var totalMoney=50000
totalMoney = document.getElementById('total_money').innerText =totalMoney; 

//performing deposit operation
document.getElementById('deposit-btn').addEventListener('click', function(){ 
    var deposit_amount = document.getElementById('deposit-amount').value;
    if(deposit_amount <= 0){
      alert('Please enter the valid amount')
      document.getElementById('deposit-amount').value ='';
      document.getElementById('hidden-alert').classList.add("hidden");

    }else{
    console.log('Deposit Amount is:' + deposit_amount);
    deposit_amount = parseInt(deposit_amount);
    DepTotal += deposit_amount;
    totalMoney = parseInt(totalMoney);
    totalMoney += deposit_amount;
    document.getElementById('total_deposit').innerText = '$' + DepTotal;
    document.getElementById('total_money').innerText =  totalMoney;
    document.getElementById('deposit-amount').value ='';
    document.getElementById('hidden-alert').classList.remove("hidden");
}
totalMoney = document.getElementById('total_money').innerText =totalMoney; 

});


//performing withdraw operation
var WidthTotal= 0;
document.getElementById('withdaw-btn').addEventListener('click', function(){
    
    var withdawAmount = document.getElementById('withdaw_amount').value;

    if(withdawAmount <= 0){
        alert('Please enter the valid amount')
        document.getElementById('withdaw_amount').value =''
        document.getElementById('hidden-alert').classList.add("hidden");

    }
    
    else if(withdawAmount <= totalMoney){
        console.log('Withdraw Amount is:' + withdawAmount);
        withdawAmount = parseInt(withdawAmount);
        WidthTotal += withdawAmount;
        totalMoney = parseInt(totalMoney);
        totalMoney -= withdawAmount;
        document.getElementById('total_money').innerText =  totalMoney;
        document.getElementById('total_widthdraw').innerText = '$' + WidthTotal;
        document.getElementById('hidden-alert').classList.remove("hidden");
        var statement = document.createElement('div');
        statement.innerText = 'Withdraw Amount is:' + withdawAmount;
        // document.getElementById('bankstatement').appendChild(statement);
        document.getElementById('withdaw_amount').value ='';
    }
    
    else if(withdawAmount > totalMoney){
        alert('Not Enough Money')
        document.getElementById('withdaw_amount').value =''
    }
    totalMoney = document.getElementById('total_money').innerText =totalMoney; 


});


//Controlling profile dropdown menu behavior
//logout operation
document.getElementById('logout-btn').addEventListener('click', function(){
    
    window.location.href='index.html' //redirecting to login page
})
// document.getElementById('settings-btn').addEventListener('click', function(){
    
//     window.location.href='index.html'
//     prompt('Do you want to delete your account?')
// })

// SEARCHBOX controlling
const searchbox = document.querySelector(".form-control input");
const container = document.querySelector("main");
const h1s = Array.from(container.querySelectorAll("h1"));

const getMatchingH1 = (searchValue) => {
  for (const h1 of h1s) {
    if (h1.textContent.toLowerCase() === (searchValue.toLowerCase())) {
      return h1;
    }
  }

  return null;
};

searchbox.addEventListener("input", function(event) {
  const searchValue = event.target.value;
  const matchingH1 = getMatchingH1(searchValue);

// making matched text red by adding tailwind class
  if (matchingH1) {
    matchingH1.classList.add("text-red-500");
  } 

  // Remove the font color after a delay of 50 milliseconds
  setTimeout(() => {
    if (matchingH1 && matchingH1.textContent.toLowerCase() !== searchValue.toLowerCase()) {
      matchingH1.classList.remove("text-red-500");
    }
  }, 50);
});

