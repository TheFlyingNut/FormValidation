const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
})

const sendData = (sRate, count) => {
    if (sRate == count) {
    alert('registration successfull ');
    swal("Good job!", "You clicked the button!", "success");
    }
  }

const successMsg = () =>{
    let formCon = document.getElementsByClassName('form-control');
    var count= formCon.length -1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className == "form-control success") {
            var sRate = 0+i;
        sendData(count);
        } else{
            return false;
        }
    }
}

const isEmail = (email) =>{
    var atSymbol = email.indexOf("@");
    if(atSymbol<1) return false;
    var dot = email.lastindexOf('.');
    if( dot <= atSymbol+3) return false;
    return true;
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal  = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal == ""){
        setErrorMsg(username, 'username cannot be blank');
    } else if(usernameVal.length <= 5){
        setErrorMsg(username, 'username min 5 character');
    }
    else{
        setSuccessMsg(username);
    }


    if (emailVal == ""){
        setErrorMsg(email, 'Email cannot be blank');
    } else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email');
    }
    else{
        setSuccessMsg(email);
    }

    if (phoneVal == "" || phoneVal == "123456789"){
        setErrorMsg(phone, 'Invalid Phone Number');
    } else if(phoneVal.length<10 || phoneVal.length>10){
        setErrorMsg(phone, 'Phone Number should be 10 digits long');
    }
    else{
        setSuccessMsg(phone);
    }

    if (passwordVal == ""){
        setErrorMsg(password, 'Password cannot be blank');
    } else if(password.includes(usernameVal)){
        setErrorMsg(passwordVal, 'Password cannot contain the username');
    }
    else if(passwordVal.length<8){
        setErrorMsg(password, 'Password cannot be less than 8 characters')
    }
    else{
        setSuccessMsg(password);
    }

    if (cpasswordVal == ""){
        setErrorMsg(cpassword, 'Confirm Password cannot be blank');
    } else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword, 'Passwords do not match');
    } else{
        setSuccessMsg(cpassword);
    }
    successMsg();
}

function setErrorMsg(input, errormsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText =  errormsg;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}