document.getElementById('submit').addEventListener('click', function(){
    var email = document.getElementById('user-email').value; //getting user input of email box
    var password = document.getElementById('password').value;//getting user input of password box
    
    //User authentication by matching email & password
    if( email == "sinja@gmail.com" && password=='hiya' ){
        window.location.href='bank.html' //redirecting to bank.html(banking page)
    }else
    {
        alert('Wrong Credantials!\n Please enter the valid email & password.') //failed in redirecting to banking page

    }
})