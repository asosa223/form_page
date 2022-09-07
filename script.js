//FINAL TASKS
//Add password validation 
//return alert on form submit

//const submit = document.querySelector(".submit");
const form = document.querySelector("#bank-form")
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener('submit', (e) => {
    //prevents the form from
    //e.preventDefault();

    alert('form submitted');
})


/*if (password.toString() === confirmPassword.toString()){
    alert('password match');
}*/

/*submit.addEventListener('click', () => {
    alert('Form Submitted');
})*/