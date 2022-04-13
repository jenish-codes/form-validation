
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get value and trim space
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //show error and add error class
        setErrorFor(username, 'Username cannot be blank');
        //check out setErrorFor() function below

    }else {
        //add success
        setSuccessFor(username);
        //refer setSuccessFor() function below
    }


    if(emailValue === '') {
        setErrorFor(email,'Email cannot be blank');
    }else if(!isEmail(emailValue)) {
        setErrorFor(email,'Email is not valid');
    }else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password,'Password cannot be blank');
    }else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2,'Password cannot be blank');
    }else if (passwordValue !== password2Value){
        setErrorFor(password2,'Password does not match')
    }
    else {
        setSuccessFor(password2);
    }




}




//sub functions

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}



// email 

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    //reg x
}