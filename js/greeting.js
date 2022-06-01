const loginForm   = document.querySelector("#login-form");
const loginInput  = document.querySelector("#login-form input");
// = const loginButton = loginForm.querySelector("#login-form button");

const link= document.querySelector("a");
const greeting= document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function handleLinkClick()
{
   
}

function onLoginSubmit(e)
{
    e.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    localStorage.setItem(USERNAME_KEY, loginInput.value);

    //greeting.innerText = "hello " + username;
    paintGreetings();    
}

function paintGreetings() {

    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `hello  ${username}`;

}

//loginButton.addEventListener("click", handleBtnClick)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);  
    loginForm.addEventListener("submit", onLoginSubmit)  
}
else
{
    paintGreetings();
}