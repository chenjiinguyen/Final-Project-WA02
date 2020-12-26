let name_txt = document.getElementById("Name")
let username_txt = document.getElementById("Username")
let password_txt = document.getElementById("Password")
let SignupBu = document.getElementById("SignupBu")


SignupBu.addEventListener("click", function () {
    let signup = true;
    let stringUsers = localStorage.getItem("users");
    let users = JSON.parse(stringUsers);

    if (username_txt.value == "" && password_txt.value == "" && name_txt.value == "") {
        alert("Cannot create account!")
    }
    else {
        for (let i = 0; i < users.length; i += 1) {
            if (username_txt == users[i].username) {
                alert("Username already exist.")
                signup = false
            }
        }
        if (signup == true) {
            let obj = {
                username: username_txt.value,
                password: password_txt.value,
                name: name_txt.value
            }
            users.push(obj)
            alert("Signed up!")
            let stringUsers = JSON.stringify(users);
            localStorage.setItem("users", stringUsers)
        }
    }
})