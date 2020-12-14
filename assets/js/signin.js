let username_txt = document.getElementById("Username")
let password_txt = document.getElementById("Password")
let SigninBu = document.getElementById("SigninBu")
SigninBu.addEventListener("click", function () {
    if (username_txt.value.length > 0 && password_txt.value.length > 0) {
        let to_be_continue = false;
        users_str = localStorage.getItem('users');
        users = JSON.parse(users_str)
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.username == username_txt.value) {
                to_be_continue = true;
                if(user.password == password_txt.value){
                    alert("Sign In Sucessfully")
                    account_raw = JSON.stringify(user)
                    localStorage.setItem("account",account_raw)
                }
                break;
            }
            
        }
    }
})