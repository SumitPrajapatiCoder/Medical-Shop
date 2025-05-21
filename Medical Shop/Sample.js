
let loginBtn = document.getElementById('login-btn');
let loginBtnadmin = document.getElementById('login-btn_ad');
let popupContainer = document.getElementById('popup-container');
let closeBtn = document.getElementById('close-btn');
let popupBody = document.getElementById('popup-body');
let forgotPasswordLink = document.getElementById('forgot-password-link');
let createAccountLink = document.getElementById('create-account-link');


//Login Button Of Admin
loginBtnadmin.onclick = () => {
    popupContainer.style.display = 'block';
    setTimeout(() => {
        popupContainer.classList.add('active');
    }, 10);  
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 300);  
}

window.onclick = (event) => {
    if (event.target == popupContainer) {
        popupContainer.classList.remove('active');
        setTimeout(() => {
            popupContainer.style.display = 'none';
        }, 300);  
    }
}

forgotPasswordLink.onclick = (event) => {
    event.preventDefault();
    popupBody.innerHTML = `
        <form action="#" class="login-form">
            <h3>Reset Password</h3>
            <input type="password" placeholder="Enter New Password" class="box" />
            <input type="password" placeholder="Confirm New Password" class="box" />
            <p><a href="#" id="back-to-login">Back to Login</a></p>
            <input type="submit" value="Reset Password" class="btn" />
        </form>
    `;
    document.getElementById('back-to-login').onclick = (event) => {
        event.preventDefault();
        loadLoginForm();
    };
}

createAccountLink.onclick = (event) => {
    event.preventDefault();
    popupBody.innerHTML = `
        <form action="#" class="login-form">
            <h3>Create Account</h3>
            <input type="text" placeholder="Enter Full Name" class="box" />
            <input type="text" placeholder="Enter Mobile Number" class="box" />
            <input type="password" placeholder="Create Password" class="box" />
            <p><a href="#" id="back-to-login">Back to Login</a></p>
            <input type="submit" value="Create Account" class="btn" />
        </form>
    `;
    document.getElementById('back-to-login').onclick = (event) => {
        event.preventDefault();
        loadLoginForm();
    };
}

function loadLoginForm() {
    popupBody.innerHTML = `
        <form action="#" class="login-form">
            <h3>Login Now</h3>
            <input type="email" placeholder="Your Email" class="box" />
            <input type="password" placeholder="Your Password" class="box" />
            <p>Forget Your Password <a href="#" id="forgot-password-link">Click Here</a></p>
            <p>Don't Have An Account <a href="#" id="create-account-link">Create Now</a></p>
            <input type="submit" value="Login Now" class="btn" />
        </form>
    `;
    document.getElementById('forgot-password-link').onclick = (event) => {
        event.preventDefault();
        forgotPasswordLink.onclick(event);
    };
    document.getElementById('create-account-link').onclick = (event) => {
        event.preventDefault();
        createAccountLink.onclick(event);
    };
}


//Login Of User
loginBtn.onclick = () => {
    popupContainer.style.display = 'block';
    setTimeout(() => {
        popupContainer.classList.add('active');
    }, 10);  
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 300);  
}

window.onclick = (event) => {
    if (event.target == popupContainer) {
        popupContainer.classList.remove('active');
        setTimeout(() => {
            popupContainer.style.display = 'none';
        }, 300);  
    }
}

forgotPasswordLink.onclick = (event) => {
    event.preventDefault();
    popupBody.innerHTML = `
        <form action="#" class="login-form">
            <h3>Reset Password</h3>
            <input type="password" placeholder="Enter New Password" class="box" />
            <input type="password" placeholder="Confirm New Password" class="box" />
            <p><a href="#" id="back-to-login">Back to Login</a></p>
            <input type="submit" value="Reset Password" class="btn" />
        </form>
    `;
    document.getElementById('back-to-login').onclick = (event) => {
        event.preventDefault();
        loadLoginForm();
    };
}

createAccountLink.onclick = (event) => {
    event.preventDefault();
    popupBody.innerHTML = `
        <form action="#" class="login-form">
            <h3>Create Account</h3>
            <input type="text" placeholder="Enter Full Name" class="box" />
            <input type="text" placeholder="Enter Mobile Number" class="box" />
            <input type="password" placeholder="Create Password" class="box" />
            <p><a href="#" id="back-to-login">Back to Login</a></p>
            <input type="submit" value="Create Account" class="btn" />
        </form>
    `;
    document.getElementById('back-to-login').onclick = (event) => {
        event.preventDefault();
        loadLoginForm();
    };
}

function loadLoginForm() {
    popupBody.innerHTML = `
        <form action="#" class="login-form">
            <h3>Login Now</h3>
            <input type="email" placeholder="Your Email" class="box" />
            <input type="password" placeholder="Your Password" class="box" />
            <p>Forget Your Password <a href="#" id="forgot-password-link">Click Here</a></p>
            <p>Don't Have An Account <a href="#" id="create-account-link">Create Now</a></p>
            <input type="submit" value="Login Now" class="btn" />
        </form>
    `;
    document.getElementById('forgot-password-link').onclick = (event) => {
        event.preventDefault();
        forgotPasswordLink.onclick(event);
    };
    document.getElementById('create-account-link').onclick = (event) => {
        event.preventDefault();
        createAccountLink.onclick(event);
    };
}

//Cart Add Value
let count=document.querySelector(".code");
let cartoon=document.querySelectorAll("#cart");

score=0;
cartoon.forEach((choice) => {
choice.addEventListener("click",()=>{
    score++;
    count.innerText=`+${score}`;
    
})
 });




