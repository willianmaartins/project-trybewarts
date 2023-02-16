const loginButton = document.getElementById('login-btn');
const loginButtons = () => {
  const loginEmail = document.getElementById('login-email').value;
  const loginPassword = document.getElementById('login-password').value;
  if ((loginEmail === 'tryber@teste.com') && (loginPassword === '123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};
loginButton.addEventListener('click', loginButtons);

const checkValid = document.getElementById('agreement');
const validateForm = () => {
  const submitButton = document.getElementById('submit-btn');
  if (submitButton.disabled === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};
checkValid.addEventListener('click', validateForm);
