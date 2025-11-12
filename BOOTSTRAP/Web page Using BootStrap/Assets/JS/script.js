const Register = document.getElementById("showRegister")
const Login = document.getElementById("Login") // now points to header login button
const LoginModal = document.getElementById("loginModal")
const RegisterModal = document.getElementById("registerModal")

const loginModals = new bootstrap.Modal(LoginModal);
const registerModals = new bootstrap.Modal(RegisterModal);

// Show register modal from login modal
document.getElementById("showRegister").addEventListener("click", (e) => {
    e.preventDefault()
    loginModals.hide()
    setTimeout(() => {
        registerModals.show()
    }, 400);
})

// Show login modal from register modal
document.getElementById("showLogin").addEventListener("click", (e) => {
    e.preventDefault()
    registerModals.hide()
    setTimeout(() => {
        loginModals.show()
    }, 400);
})

const RegisterForm = document.getElementById("registerForm")
const LoginForm = document.getElementById("loginForm")

RegisterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const Name = document.getElementById("registerName").value
    const Email = document.getElementById("registerEmail").value
    const Password = document.getElementById("registerPassword").value

    if (!Name || !Email || !Password) {
        alert("Please Fill the Empty Fields")
        return
    }

    localStorage.setItem("UserName", Name)
    localStorage.setItem("UserEmail", Email)
    localStorage.setItem("UserPassword", Password)

    alert("Registration Successful, Please Log in")
    registerModals.hide()
    setTimeout(() => {
        loginModals.show()
    }, 300);
})

LoginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const Email = document.getElementById("loginEmail").value
    const Password = document.getElementById("loginPassword").value

    const SavedUserEmail = localStorage.getItem("UserEmail")
    const SavedUserPassword = localStorage.getItem("UserPassword")

    if (Email === SavedUserEmail && Password === SavedUserPassword) {
        alert("Login Successful!")
        Login.style.display = 'none'  // hides the header login button
        loginModals.hide()
    } else {
        alert("Invalid Email or Password")
    }
})

const StoryButton = document.getElementById("YourStoryButton");

StoryButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    alert("Your Story Saved Successfully");
});
