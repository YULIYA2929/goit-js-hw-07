
const userNameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

userNameInput.addEventListener('input', (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
