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
        setErrorMsg(emailVal, 'Email cannot be blank');
    } else if(!isEmail(emailVal)){
        setErrorMsg(emailVal, 'Not a valid Email');
    }
    else{
        setSuccessMsg(email);
    }

    if (phoneVal == "" || phoneVal == "123456789"){
        setErrorMsg(phoneVal, 'Invalid Phone Number');
    } else if(phoneVal.length<10 || phoneVal.length>10){
        setErrorMsg(phoneVal, 'Phone Number should be 10 digits long');
    }
    else{
        setSuccessMsg(phone);
    }

    if (passwordVal == ""){
        setErrorMsg(passwordVal, 'Password cannot be blank');
    } else if(passwordVal.includes(usernameVal)){
        setErrorMsg(passwordVal, 'Password cannot contain the username');
    }
    else if(passwordVal.length<8){
        setErrorMsg(passwordVal, 'Password cannot be less than 8 characters')
    }
    else{
        setSuccessMsg(password);
    }
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