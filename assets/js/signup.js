
let name_txt = document.getElementById("Name")
let username_txt = document.getElementById("Username")
let password_txt = document.getElementById("Password")
let confim_password_txt = document.getElementById("ConfimPassword")
let SignupBu = document.getElementById("SignupBu")


SignupBu.addEventListener("click", function () {
    if (name_txt.value.length>0 && username_txt.value.length>0 && password_txt.value.length>0) {

        users_str = localStorage.getItem('users');
        users = JSON.parse(users_str)
        let to_be_continue = true;
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.username == username_txt.value) {
                alert("UserName Already");
                to_be_continue = false;
                break;
            }
        }

        if (to_be_continue == true) {

            if (password_txt.value != confim_password_txt.value) {
                alert("Confirm password do not match");
            } else {
                let user = {
                    name : name_txt.value,
                    username : username_txt.value,
                    password : password_txt.value
                }
                users.push(user)
                users_raw = JSON.stringify(users)
                localStorage.setItem('users',users_raw)
                alert("Creat account Successfully!!");
                window.location="/signin.html";
            }
        }
    }else{
        alert('Please fill out the information before countinue')
    }
})