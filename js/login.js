// Handle Login
function handleLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Retrieve credentials from localStorage
    var storedEmail = localStorage.getItem("userEmail");
    var storedPassword = localStorage.getItem("userPassword");

    // Check if email and password match the stored values
    if (email === storedEmail && password === storedPassword) {
        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome back!',
        }).then(() => {
            // Redirect to quiz page after success
            window.location.href = 'quiz.html';
        });
    } else {
        // Show error message if credentials do not match
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Incorrect email or password. Please try again.',
        });
    }

    // Clear form fields
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";

    return false; // Prevent form submission
}
