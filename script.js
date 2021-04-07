function validarFormulario() {
  const inputName = document.querySelector("name");
  const inputLastName = document.querySelector("lastname");
  const inputEmail = document.querySelector("email");
  const inputPassword = document.querySelector("password");

  const buttonSubmit = document.querySelector("button");

  function limpar() {
    inputName.classList.remove("error");
    inputLastName.classList.remove("error");
    inputEmail.classList.remove("error");
    inputPassword.classList.remove("error");
  }

  if (inputName.value === "" || inputName.value.length < 3) {
    limpar();
    inputName.classList.add("error");
    // inputLastName.classList.remove("error");
    // inputEmail.classList.remove("error");
    // inputPassword.classList.remove("error");

    // inputName.focus();
    // return false;
  }

  if (inputLastName.value === "" || inputLastName.value.length < 3) {
    inputLastName.classList.add("error");

    inputName.classList.remove("error");
    inputEmail.classList.remove("error");
    inputPassword.classList.remove("error");

    inputLastName.focus();
    return false;
  }

  if (inputEmail.value === "" || !inputEmail.value.length("@")) {
    inputEmail.classList.add("error");

    inputName.classList.remove("error");
    inputLastName.classList.remove("error");
    inputPassword.classList.remove("error");

    inputName.focus();
    return false;
  }

  if (inputPassword.value === "" || inputPassword.value.length < 3) {
    inputPassword.classList.add("error");

    inputLastName.classList.remove("error");
    inputName.classList.remove("error");
    inputEmail.classList.remove("error");

    inputPassword.focus();
    return false;
  }

  return true;
}
