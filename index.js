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
}
export default addRegistrationForm;