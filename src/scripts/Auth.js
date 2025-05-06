// Register a new user
export function register(username, password, email, mobile) {
    if (localStorage.getItem(username)) {
      return "User already exists!";
    }
  
    const userData = {
      password,
      email,
      mobile
    };
  
    localStorage.setItem(username, JSON.stringify(userData));
    return "Registration successful!";
  }
  
  // Log in an existing user
  export function login(username, password) {
    const storedUser = JSON.parse(localStorage.getItem(username));
  
    if (storedUser && storedUser.password === password) {
      return "Login successful!";
    } else {
      return "Invalid username or password.";
    }
  }
  