const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);

    const elements = event.currentTarget.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value
    };

    if(info.email === "" || info.password === "") {
        alert('All form fields must be filled in') ;

    } else {
        console.log(info);
    }

    event.currentTarget.reset();
}

