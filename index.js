function addRegistrationForm() {
    const formContainer = document.querySelector('.form-container');

    formContainer.innerHTML = `
        <form id="registrationForm">
            <div class="form-group">
                <label for="inputName">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Input name" name="name" required>
            </div>
            <div class="form-group">
                <label for="inputPhone">Phone</label>
                <input type="text" class="form-control" id="inputPhone" placeholder="Input phone" name="phone" required>
            </div>
            <input type="submit" value="Submit" class="btn btn-primary">
        </form>
    `;

    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', handleFormSubmit);

    const nameInput = document.getElementById('inputName');
    const phoneInput = document.getElementById('inputPhone');

    nameInput.addEventListener('input', () => validateInput(nameInput, validateName));
    phoneInput.addEventListener('input', () => validateInput(phoneInput, validatePhone));
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());

    const response = await fetch('/people', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Указываем, что отправляем данные в формате JSON
        },
        body: JSON.stringify(jsonData)
    });

    if (response.ok) {
        document.body.innerHTML = '<h3 class="mb-4">User successfully registered</h3>';
    }
}

function validateInput(inputElement, validationFunction) {
    const isValid = validationFunction(inputElement.value);
    if (isValid) {
        inputElement.classList.add('is-valid');
        inputElement.classList.remove('is-invalid');
    } else {
        inputElement.classList.add('is-invalid');
        inputElement.classList.remove('is-valid');
    }
}

function validateName(name) {
    return name.trim().length > 0;
}

function validatePhone(phone) {
    const phoneRegex = /^\+[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
}

export default addRegistrationForm;