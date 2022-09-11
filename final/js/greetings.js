const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function activateLogout(){
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    loginInput.innerText("");
}

function paintGreetings(username){
    greeting.innerText = `안녕하세요 ${username} 님! \n Have a good day!`;
    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "  Logout  ";
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.appendChild(button);
    button.addEventListener("click", activateLogout);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}