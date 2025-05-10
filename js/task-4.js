const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
    return; 
  }

  console.log(data);
  event.currentTarget.reset();
}

