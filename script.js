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

const textarea = document.getElementById('textarea');
const counterChar = () => {
  const counter = document.getElementById('counter');
  const inputText = textarea.value.length;
  const maxChar = 500 - inputText;
  counter.innerHTML = maxChar;
};
textarea.addEventListener('keyup', counterChar);

const form = document.getElementById('evaluation-form');
const submitButton = document.getElementById('submit-btn');
const createForm = document.createElement('form');
createForm.id = 'form-data';
const captureName = document.getElementById('input-name');
const captureLastName = document.getElementById('input-lastname');
const captureEmail = document.getElementById('input-email');
const captureHouse = document.getElementById('house');
const captureTextarea = document.getElementById('textarea');

let rateValue = 0;
const formRate = () => {
  const captureRate = document.getElementsByClassName('rate');
  for (let index = 0; index < captureRate.length; index += 1) {
    if (captureRate[index].checked === true) {
      rateValue = captureRate[index].value;
    }
  }
};
let familyValue = 0;
const formFamily = () => {
  const captureFamily = document.getElementsByClassName('family');
  for (let index = 0; index < captureFamily.length; index += 1) {
    if (captureFamily[index].checked === true) {
      familyValue = captureFamily[index].value;
    }
  }
};
const subjectValue = [];
const formSubject = () => {
  const captureSubject = document.getElementsByClassName('subject');
  for (let index = 0; index < captureSubject.length; index += 1) {
    if (captureSubject[index].checked === true) {
      subjectValue.push(` ${captureSubject[index].value}`);
    }
  }
};
const createNewForm = () => {
  const captureMain = document.getElementsByTagName('main')[0];
  captureMain.appendChild(createForm);
  const createName = document.createElement('p');
  createName.innerHTML = `Nome: ${captureName.value} ${captureLastName.value}`;
  createForm.appendChild(createName);
  const createEmail = document.createElement('p');
  createEmail.innerHTML = `Email: ${captureEmail.value}`;
  createForm.appendChild(createEmail);
  const createHouse = document.createElement('p');
  createHouse.innerHTML = `Casa: ${captureHouse.value}`;
  createForm.appendChild(createHouse);
};
const NewForm = () => {
  const createFamily = document.createElement('p');
  createFamily.innerHTML = `Família: ${familyValue}`;
  console.log(createFamily.innerHTML);
  createForm.appendChild(createFamily);
  const createSubject = document.createElement('p');
  createSubject.innerHTML = `Matérias: ${subjectValue.toString()}`;
  console.log(createSubject.innerHTML);
  createForm.appendChild(createSubject);
  const createRate = document.createElement('p');
  createRate.innerHTML = `Avaliação: ${rateValue}`;
  console.log(createRate.innerHTML);
  createForm.appendChild(createRate);
  const createTextarea = document.createElement('p');
  createTextarea.innerHTML = `Observações: ${captureTextarea.value}`;
  createForm.appendChild(createTextarea);
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.style.display = 'none';
  formRate();
  formFamily();
  formSubject();
  createNewForm();
  NewForm();
});
