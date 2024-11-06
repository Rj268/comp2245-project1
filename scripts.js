/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from actually submitting

        const emailValue = emailInput.value.trim();

        if (emailValue) {
            // If there is an email address, display the success message
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
            messageDiv.style.color = 'white'; // Change color as needed
        } else {
            // If no email is entered, display the error message
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.style.color = 'red'; // Change color as needed for better visibility
        }
    });
});
