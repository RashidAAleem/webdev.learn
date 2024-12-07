// Handle Signup
function handleSignup() {
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    if (username && email && password) {
        // Save user details to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        // Show success message using Swal
        Swal.fire({
            icon: 'success',
            title: 'Signup Successful',
            text: 'Your account has been created!',
        }).then(() => {
            // Redirect to login page after success
            window.location.href = 'login.html';
        });

        // Clear form fields
        document.getElementById("signupUsername").value = "";
        document.getElementById("signupEmail").value = "";
        document.getElementById("signupPassword").value = "";

        // Optionally, you can redirect after successful signup
        // window.location.href = 'login.html'; // Redirect to login page
    }

    return false; // Prevent form submission
}