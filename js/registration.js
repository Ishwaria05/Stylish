function submit() {
    var nameEl = document.getElementById("name"); 
    var nameerr = document.getElementById('name_error');
    if(nameEl.value == ''){
        nameerr.innerHTML = "name is req";
        nameEl.style.borderColor = 'red';
        return '';
    }
    else{
        nameerr.innerHTML = "";
        nameEl.style.borderColor = 'green';
    
    }
    var emailEl = document.getElementById("email"); 
    var emailerr = document.getElementById('email_error');
    if(emailEl.value == ''){
        emailerr.innerHTML = "email is req";
        emailEl.style.borderColor = 'red';
        return '';
    }
    else{
        emailerr.innerHTML = "";
        emailEl.style.borderColor = 'green';
    
    }
    var PhonenumberEl = document.getElementById("Phonenumber");
    var Phonenumbererr = document.getElementById('Phonenumber_error');
   if(PhonenumberEl.value.length==''){
    Phonenumbererr.innerHTML="number is required";
    PhonenumberEl.style.borderColor = 'red';
    return'';
   }
   else if(PhonenumberEl.value.length  !=10){
    Phonenumbererr.innerHTML="Mobile No is not valid";
    PhonenumberEl.style.borderColor = 'red';
    return'';
   }
    else
    {
    Phonenumbererr.innerHTML = "mobile No is  valid";
    PhonenumberEl.style.borderColor = 'green';
}
    var passwordEl = document.getElementById("password"); 
    var passworderr = document.getElementById('password_error');
    if(passwordEl.value == ''){
        passworderr.innerHTML = "password is req";
        passwordEl.style.borderColor = 'red';
        return '';
    }
    else{
        passworderr.innerHTML = "";
        passwordEl.style.borderColor = 'green';
    
    }
    var addressEl = document.getElementById("address"); 
    var addresserr = document.getElementById('address_error');
    if(addressEl.value == ''){
        addresserr.innerHTML = "address is req";
        addressEl.style.borderColor = 'red';
        return '';
    }
    else{
        addresserr.innerHTML = "";
        addressEl.style.borderColor = 'green';
    }
    

var data = {
    Name: nameEl.value,
    Email: emailEl.value,
    Password: passwordEl.value,
    Phone: PhonenumberEl.value,
    Address: addressEl.value, 
};

console.log(data);

let dataarr = JSON.parse(localStorage.getItem('detail')) || [];
let isDuplicate = false;
dataarr.forEach(element => {
    if (element.Email === data.Email) {
        isDuplicate = true;
    }
});
if (isDuplicate) {
    alert('You already have an account');
} else {
    dataarr.push(data);
    console.log(dataarr);
    localStorage.setItem('detail', JSON.stringify(dataarr));
    alert('You have registered successfully');
    window.location.href = "./login.html";
}
}
