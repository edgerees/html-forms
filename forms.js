const init = function() {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
};

const reset = function(ev) {
    // HTML will automically put the form back to the initial state
    // unless we do that
    ev.preventDefault();
    // we can reset programmatically
    document.getElementById('form-user').reset();

    // if you want to do anything else, you can .....
};

const validate = function() {
    // let valid = true;
    let failures = [];

    const first = document.getElementById('input-first');
    const email = document.getElementById('input-email');
    const password = document.getElementById('input-password');
    const select = document.getElementById('input-age'); // .selectedIndex .options .length .selectedValue .value
    const chk = document.getElementById('input-alive'); // .checked .value

    // logic for first (element)
    if (first.value === '') { // empty string ('') is a falsy value
        failures.push({ input: 'input-first', msg: 'Required field'});
    }
     // logic for email (element)
    if (email.value === '' || !email.value.includes('@')) { 
        failures.push({ input: 'input-email', msg: 'Required field'});
    }
    // logic for password (element)
    if (password.value === '' || password.value.length < 8) {
        failures.push({ input: 'input-password', msg: 'Must be at least 8 characters'});
    }

    // logic for select (element)
    if (select.selectedIndex === 0) {
        failures.push({ input: 'input-age', msg: 'Too young...'});
    }

    // logic for chk (element)
    if (!chk.checked) {
        failures.push({ input: 'input-alive', msg: 'Must be alive to submit form'});
    }

    return failures;

};

const send = function(ev) {
    ev.preventDefault();
    ev.stopPropagation(); // bubbling up to any parent element (the click)

    let fails = validate();

    if (fails.length === 0) {
        // good to go
        document.getElementById('form-user').submit();
    } else {
        // bad user
        fails.forEach(obj => {
            const field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }

};

document.addEventListener('DOMContentLoaded', init);