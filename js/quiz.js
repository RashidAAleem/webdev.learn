 // Display logged-in username
 var username = JSON.parse(localStorage.getItem('userData'))?.username || "Guest";
 document.getElementById('username-display').textContent = username;
 document.getElementById('username-display-dropdown').textContent = username;

 // Logout button functionality
 document.getElementById('logout-button').addEventListener('click', () => {
     localStorage.removeItem('userData');
     alert('Logged out successfully!');
     window.location.href = 'index.html';
 });

 document.getElementById('logout-button-dropdown').addEventListener('click', () => {
     localStorage.removeItem('userData');
     alert('Logged out successfully!');
     window.location.href = 'index.html';
 });