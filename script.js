const inputFields = document.querySelectorAll('.entry-container > input');
const signupForm = document.querySelector('#odin-sign-up-form');
const formButton = document.querySelector('.button-container > button');

inputFields.forEach((inputField,index) =>{
    inputField.addEventListener('focusout',function (event) {
        console.dir(inputField);
        let inputVal = inputField.value
        const inputLabel = document.querySelector(`.entry-container > label[for=${inputField.id}]`)
        console.log(typeof inputVal, inputField.id,inputLabel, inputField.validity);
        if (inputVal.length !== 0){
            inputLabel.classList.add('hasValue');

        } else {
            inputLabel.classList.remove('hasValue');
        }
    })
})

//.isInvalid & .password-error

// const password1 = document.querySelector('#password1')
// const password2 = document.querySelector('#password2')


signupForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    if (validateForm()){
        signupForm.submit();
    }
});
formButton.addEventListener('click', (event)=>{
    if (validateForm()){
        signupForm.submit();
    }
})


function checkifPasswordsMatch(p1,p2){
    // const containerDiv = document.querySelector('.entry-container:nth-child(5)');
    let validPassword = true;
    if (p1.value.length !== 0 && p2.value.length !== 0 && p1.value !== p2.value){
        p1.classList.add('isInvalid');
        p2.classList.add('isInvalid');
        document.documentElement.style.setProperty('--password-error-opacity','1');
        validPassword = false;
    } else{
        p1.classList.remove('isInvalid');
        p2.classList.remove('isInvalid');
        document.documentElement.style.setProperty('--password-error-opacity','0');
    }
    return validPassword;
}

// password1.addEventListener('focusout',(event)=>{
//     checkifPasswordsMatch(password1,password2);
// });

// password2.addEventListener('focusout',(event)=>{
//     checkifPasswordsMatch(password1,password2);
// });

function validateForm(){
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email_addr");
    const phoneNumber = document.getElementById("phone_number");
    const p1 = document.querySelector('#password1');
    const p2 = document.querySelector('#password2');

    let isValid = true;
    if ( ! firstName.validity.valid ){
        isValid = false;

    }
    if (! lastName.validity.valid ){
        isValid = false;
    }
    if (! email.validity.valid) {
        isValid = false;
    }
    if (! phoneNumber.validity.valid) {
        isValid = false;
    }
    if (! p1.validity.valid) {
        isValid = false;
    }
    if (! p2.validity.valid) {
        isValid = false;
    }
    if (! checkifPasswordsMatch(p1,p2) ){
        isValid = false;
    }
    firstName.reportValidity();
    return isValid
}

