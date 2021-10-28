window.addEventListener('load', function(){
  let userRegisterForm = document.querySelector('#userRegisterForm');
  userRegisterForm.addEventListener('submit', function(e){
    e.preventDefault();
    let errores = [];

    let userName = document.querySelector('#userName');
    let nameErrorMessage = document.querySelector('#nameErrorMessage');
    nameErrorMessage.innerText = '';
    if(userName.value == '') {
      userName.classList.remove('is-valid');
      userName.classList.add('is-invalid');
      nameErrorMessage.innerText = 'El campo nombre no debe estar vacío';
      errores.push('El campo nombre no debe estar vacío');
    } else if(userName.value.length < 2) {
      userName.classList.remove('is-valid');
      userName.classList.add('is-invalid');
      nameErrorMessage.innerText = 'El campo nombre debe tener al menos 2 caracteres';       
      errores.push('El campo nombre debe tener al menos 2 caracteres');
    } else {
      userName.classList.remove('is-invalid');
      userName.classList.add('is-valid');
      
    }

    let userEmail = document.querySelector('#userEmail');
    let emailErrorMessage = document.querySelector('#emailErrorMessage');
    emailErrorMessage.innerText = '';

    if(userEmail.value == '') {
        userEmail.classList.remove('is-valid');
        userEmail.classList.add('is-invalid');
        emailErrorMessage.innerText = 'El campo email no debe estar vacío'; 
        errores.push('El campo email no debe estar vacío');
    } else {
      let correo = ['@gmail.com', '@outlook.com', '@mail.com', '@correo.com'];
      let email = userEmail.value;
  
      let emailValidator = 0;
      correo.forEach(element => {
        if(email.includes(element)) {
          emailValidator = 1;
        }
      })
      
      if(emailValidator == 0) {
        userEmail.classList.remove('is-valid');
        userEmail.classList.add('is-invalid');
        emailErrorMessage.innerText = 'Debe ingresar un email con formato válido';
        errores.push('Debe ingresar un email con formato válido'); 
      } else {
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
      }
    }

    let userPassword = document.querySelector('#userPassword');
    let passwordErrorMessage = document.querySelector('#passwordErrorMessage');
    passwordErrorMessage.innerText = '';

    if(userPassword.value == '') {
      userPassword.classList.remove('is-valid');
      userPassword.classList.add('is-invalid');
      passwordErrorMessage.innerText = 'El campo password no debe estar vacío';
      errores.push('El campo password no debe estar vacío');
    } else if (userPassword.value.length < 8) {
      userPassword.classList.remove('is-valid');
      userPassword.classList.add('is-invalid');
      passwordErrorMessage.innerText = 'El campo password debe tener al menos 8 caracteres';
      errores.push('El campo password debe tener al menos 8 caracteres');
    } else {
      userPassword.classList.remove('is-invalid');
      userPassword.classList.add('is-valid');
    }

    let userState = document.querySelector('#userState');
    let stateErrorMessage = document.querySelector('#stateErrorMessage');
    stateErrorMessage.innerText = '';

    if(userState.value == '') {
      userState.classList.remove('is-valid');
      userState.classList.add('is-invalid');
      stateErrorMessage.innerText = 'Debe seleccionar un Estado válido';
    } else {
      userState.classList.remove('is-invalid');
      userState.classList.add('is-valid');
    }


    if(!errores.length > 0) {
      userRegisterForm.submit();
      nameErrorMessage.innerText = '';
      emailErrorMessage.innerText = '';
      passwordErrorMessage.innerText = '';
      stateErrorMessage.innerText = '';
    }
  })
})