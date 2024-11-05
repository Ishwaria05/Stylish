function validate() {
  var emailEl = document.getElementById("email"); 
  var emailerr = document.getElementById('email_error');
  
  // Email validation
  if (emailEl.value == '') {
      emailerr.innerHTML = "Email is required";
      emailEl.style.borderColor = 'red';
      return false;
  } else {
      emailerr.innerHTML = "";
      emailEl.style.borderColor = 'green';
  }

  var passwordEl = document.getElementById("password"); 
  var passworderr = document.getElementById('password_error');
  
  if (passwordEl.value == '') {
      passworderr.innerHTML = "Password is required";
      passwordEl.style.borderColor = 'red';
      return false;
  } else {
      passworderr.innerHTML = "";
      passwordEl.style.borderColor = 'green';
  }

  
  let data = JSON.parse(localStorage.getItem('detail')) || [];
  let isValidUser = false;


  data.forEach(element => {
      if (element.Email === emailEl.value && element.Password === passwordEl.value) {
          isValidUser = true; 
      }
  });

  if (isValidUser) {
      alert('Login successful'); 
      window.location.href = "./index.html";
  } else {
      alert("you have't an account");
  }
    }