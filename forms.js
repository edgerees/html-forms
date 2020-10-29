const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-cancel').addEventListener('click', send);
};

const reset = function(ev){
    //HTML will automatically put the form to the initial state
    //unless we do that
    ev.preventDefault(); //doesnt allow anywhere else to be clicked
    //we can reset programmatically
    document.getElementById('form-user').reset();
    //if you want to do anyhting else for reset, you can do that here.
    // console.log('the page should reset here');
};

const validate = function(){ //validate info and send back error message if info is wrong
    let valid = false;
    let failures = {};

    const first = document.getElementById('input-first');
    const email = document.getElementById("input-email");
    const password = document.getElementById("input-password");
    const select = document.getElementById("input-age");
    const chk = document.getElementById("input-alive");
    //logic for first (element)
    if (first.value ==='') {
        failures.push({input: 'input-first', msg: 'Required Field'}); 
    }
    if (email.value ==='' || !email.value.includes('@')) {
        failures.push({input: 'input-first', msg: 'Required Field'}); 
    }
    if (password.value === ''|| password.value.length < 8 ) {
        failures.push({input: 'input-first', msg: 'Must be at least 8 charachters'});
    }
    if (select.selectedIndex === 0) {
        failures.push({input: 'input-age', msg: 'Too Young?'}); 
    }
    if (!chk. checked) {
        failures.push({input: 'input-alive', msg: 'Must be alive to submit form'})
     }  
        return failures;
    
};

const send = function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    let fails = validate();

    if (fails.length === 0 ) {
        document.getElementById('form-user').submit(); 
    }else{ //bad user
        fails.forEach(Obj => {
            const field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg)    
        });
    }

};

document.addEventListener('DOMContentLoaded', init);

// function init(){}