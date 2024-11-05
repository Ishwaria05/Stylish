function submit() {
    var EmailEl = document.getElementById("Email"); 
    var Emailerr = document.getElementById('Email_error');
    if (EmailEl.value === '') {
        Emailerr.innerHTML = "Email is required";
        EmailEl.style.borderColor = 'red';
        return false;
    } else {
        Emailerr.innerHTML = "";
        EmailEl.style.borderColor = 'green';
    }

    var NewPasswordEl = document.getElementById("NewPassword"); 
    var NewPassworderr = document.getElementById('NewPassword_error');
    if (NewPasswordEl.value === '') {
        NewPassworderr.innerHTML = "Password is required";
        NewPasswordEl.style.borderColor = 'red';
        return false;
    } else {
        NewPassworderr.innerHTML = "";
        NewPasswordEl.style.borderColor = 'green';
    }

    var ConformPasswordEl = document.getElementById("ConformPassword"); 
    var ConformPassworderr = document.getElementById('ConformPassword_error');
    if (ConformPasswordEl.value === '') {
        ConformPassworderr.innerHTML = "Confirm password is required";
        ConformPasswordEl.style.borderColor = 'red';
        return false;
    } else if (NewPasswordEl.value !== ConformPasswordEl.value) {
        ConformPassworderr.innerHTML = "New password and confirm password must match";
        ConformPasswordEl.style.borderColor = 'red';
        return false;
    } else {
        ConformPassworderr.innerHTML = "";
        ConformPasswordEl.style.borderColor = 'green';
    }
// Fetch the stored details
let dataarr = JSON.parse(localStorage.getItem('detail')) || [];
let isAccountFound = false;

dataarr.forEach(element => {
    // Check if the email entered by the user exists in the stored data
    if (element.Email === EmailEl.value) {
        isAccountFound = true;
        
        // If the entered password is different from the stored password, update it
        if (element.Password !== NewPasswordEl.value) {
            element.Password = NewPasswordEl.value;  // Update password to the new one
            alert('Your password has been updated successfully.');
        } else {
            alert('Logged in successfully.');
        }
    }
});

if (!isAccountFound) {
    alert('Account not found. Please sign up.');
} else {
    // Save the updated data back to localStorage
    localStorage.setItem('detail', JSON.stringify(dataarr));
    window.location.href = "./login.html"; // Redirect to homepage after successful login
}

    
}
