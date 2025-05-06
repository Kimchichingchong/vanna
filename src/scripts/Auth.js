// Login user
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const storedPassword = localStorage.getItem(username);
  
    if (storedPassword === password) {
      document.getElementById("message").innerText = "Login successful!";
    } else {
      document.getElementById("message").innerText = "Invalid username or password.";
    }
  }