
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/contactUsFormResponse.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contact-us-form-response-placeholder").innerHTML = data;
        });
});

document.getElementById('myForm').addEventListener('submit', submitFunc);


function closeFormFunction() {
    document.querySelector(".submit-open-response").classList.toggle("active");
    document.documentElement.classList.toggle('overflow-y-hidden');
    document.querySelectorAll('.input-field').forEach(el => el.value  = '');

}

function submitFunc(event) {

    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    let valid = true;

    const fields = ['name', 'email', 'mobile', 'company'];

    fields.forEach(id => {

        if (id === 'name' || id === 'company') {
            const input = document.getElementById(id);
            const errorDiv = document.getElementById('error-' + id);
            const value = input.value.trim();
            const validName = /^[A-Za-z\s]+$/;
        
            if (!value) {
                errorDiv.textContent = 'Please fill the required field';
                valid = false;
            } else if (!validName.test(value)) {
                errorDiv.textContent = 'Only letters and spaces are allowed';
                valid = false;
            } else {
                errorDiv.textContent = ''; // Clear any previous error
            }
        }
        
        if (id === 'email') {
            const input = document.getElementById(id);
            const errorDiv = document.getElementById('error-' + id);
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!input.value.trim()) {
                errorDiv.textContent = 'Please fill the required field';
                valid = false;
            } else if (!emailPattern.test(input.value.trim())) {
                errorDiv.textContent = 'Please enter a valid email address';
                valid = false;
            } else {
                errorDiv.textContent = '';
            }
        }

        if (id === 'mobile') {
            const input = document.getElementById(id);
            const errorDiv = document.getElementById('error-' + id);
            const mobilePattern = /^[6-9]\d{9}$/; // For Indian mobile numbers
        
            if (!input.value.trim()) {
                errorDiv.textContent = 'Please fill the required field';
                valid = false;
            } else if (!mobilePattern.test(input.value.trim())) {
                errorDiv.textContent = 'Please enter a valid 10-digit mobile number';
                valid = false;
            } else {
                errorDiv.textContent = '';
            }
        }

        
    });

    if (valid) {

        // Submit the form or do something else
        // alert("Form submitted successfully!");
        // document.getElementById("myForm").submit(); // Uncomment if actual submission needed
        document.querySelector(".submit-open-response").classList.toggle("active");
        document.documentElement.classList.toggle('overflow-y-hidden');

    }

    return false;


}


