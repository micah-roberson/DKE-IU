const registerContainer = document.getElementById("register-container");
const loginContainer = document.getElementById("login-container");
const poopContainer = document.getElementById("poop-container");
const registerButton = document.getElementById("register-btn");
const loginButton = document.getElementById("login-btn");
const regEmailInput = document.getElementById("reg-email");
const regPasswordInput = document.getElementById("reg-password");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

registerButton.addEventListener("click", () => {
  const email = regEmailInput.value;
  const password = regPasswordInput.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      registerContainer.style.display = "none";
      loginContainer.style.display = "block";
    })
    .catch(error => {
      console.error(error.message);
    });
});

loginButton.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      loginContainer.style.display = "none";
      poopContainer.style.display = "block";
    })
    .catch(error => {
      console.error(error.message);
    });
});
