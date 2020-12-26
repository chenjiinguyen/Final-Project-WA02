let username_txt = document.getElementById("Username")
let password_txt = document.getElementById("Password")
let SigninBu = document.getElementById("SigninBu")

SigninBu.addEventListener('click', function () {
    let usernameExist = false;
    let stringUsers = localStorage.getItem("users");
    let users = JSON.parse(stringUsers);
    console.log(users)

    for (let i = 0; i < users.length; i += 1) {
        if (username_txt.value == users[i].username) {
            usernameExist = true
            if (password_txt.value == users[i].password) {
                alert("Login successful, " + users[i].name)
                break;
            }
            else if(password_txt.value.length == 0) {
                alert("Password blank!")
            }else {
                alert("Incorrect password!")
            }
            
        }
    }
    if (usernameExist == false) {
        alert("Username not exist")
    }
})
