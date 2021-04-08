// function validarFormulario() {
//   const inputName = document.querySelector("name");
//   const inputLastName = document.querySelector("lastname");
//   const inputEmail = document.querySelector("email");
//   const inputPassword = document.querySelector("password");

//   const buttonSubmit = document.querySelector("button");

//   function limpar() {
//     inputName.classList.remove("error");
//     inputLastName.classList.remove("error");
//     inputEmail.classList.remove("error");
//     inputPassword.classList.remove("error");
//   }

//   if (inputName.value === "" || inputName.value.length < 3) {
//     limpar();
//     inputName.classList.add("error");
//     // inputLastName.classList.remove("error");
//     // inputEmail.classList.remove("error");
//     // inputPassword.classList.remove("error");

//     // inputName.focus();
//     // return false;
//   }

//   if (inputLastName.value === "" || inputLastName.value.length < 3) {
//     inputLastName.classList.add("error");

//     inputName.classList.remove("error");
//     inputEmail.classList.remove("error");
//     inputPassword.classList.remove("error");

//     inputLastName.focus();
//     return false;
//   }

//   if (inputEmail.value === "" || !inputEmail.value.length("@")) {
//     inputEmail.classList.add("error");

//     inputName.classList.remove("error");
//     inputLastName.classList.remove("error");
//     inputPassword.classList.remove("error");

//     inputName.focus();
//     return false;
//   }

//   if (inputPassword.value === "" || inputPassword.value.length < 3) {
//     inputPassword.classList.add("error");

//     inputLastName.classList.remove("error");
//     inputName.classList.remove("error");
//     inputEmail.classList.remove("error");

//     inputPassword.focus();
//     return false;
//   }

//   return true;
// }

let FormValidator = {
  handleSubmit:(event) => {
    event.preventDefault();

    let send = true;

    let inputs = form.querySelectorAll("input");

    FormValidator.clearErrors();

    for(let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      // console.log(input);
      let check = FormValidator.checkInput(input);
      if(check !== true) {
        send = false;
        // Exibir o erro
        // console.log(check);
        FormValidator.showError(input, check);
      }
    }

    if(send) {
      form.submit();
    }
  },

  checkInput:(input) => {
    let rules = input.getAttribute('data-rules');
    if(rules !== null){
      rules = rules.split('|');
      for(let k in rules) {
        let rDetails = rules[k].split('=');
        switch(rDetails[0]) {
          case 'required':
            if(input.value == '') {
              return `${input.placeholder} cannot be empty`;
            }
            break;
        }
      }
    }

    return true;
  },

  showError:(input, error) => {
    input.style.borderColor = '#FF0000';

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.ElementSibling);
  },

  clearErrors:() => {
    let inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style = '';
    }

    let errorElements = document.querySelectorAll('.error');
    for(let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove();
    }
  }
}

let form = document.querySelector('.formValidator');
form.addEventListener('submit', FormValidator.handleSubmit);