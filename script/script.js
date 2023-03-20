// Register Button
let register = document.getElementById('registButton');
// Login Button
let login = document.getElementById('loginButton');
// Validor Password For Regist
let validatorRegist = document.getElementById('validatorRegist')
// Validor Password For Login
let validatorLogin = document.getElementById('validatorLogin')
// Data Account Simulator Without Database
let dataAccount = [];
// Form Regist
let formRegist = document.getElementById('form-register');
// Form Login 
let formLogin = document.getElementById('form-login');
// Login Link
let loginLink = document.getElementById('login');
// Register Link
let registerLink = document.getElementById('register');

register.addEventListener('click', () => {

    // Setup Data
    let username = document.getElementById('registUser').value;
    let password = document.getElementById('registPass').value;

    if(!username && !password){
        validatorRegist.textContent = 'Masukkan Data Untuk Regist';
    }else if(password.length < 8){
        validatorRegist.textContent = 'Masukkan 8 Karakter';
    }else{
        // Create Array
        let newData = [];
        newData.push(username);
        newData.push(password);
        
        dataAccount.push(newData);
        validatorRegist.textContent = 'Silahkan Login';
        console.log(dataAccount);
    }
    console.log(password.length)
});

login.addEventListener('click', () => {

    // Setup Data
    let username = document.getElementById('loginUser').value;
    let password = document.getElementById('loginPass').value;

    for (let i = 0; i < dataAccount.length; i++) {
        if(username == dataAccount[i][0] && password == dataAccount[i][1])
        {
            console.log("Berhasil")
            validatorLogin.textContent = ""
            window.location = "market.html"
        }else{
            validatorLogin.textContent = 'Data Tidak Sesuai';
            console.log("Gagal");
            return;
        }
    }
});

loginLink.addEventListener('click', () => {
        setTimeout(() => {
            if(formRegist.style.display = "flex"){
                formRegist.style.opacity = '0';
            }
        }, 500);

        setTimeout(() => {
            if(formRegist.style.display = "flex"){
                formLogin.style.opacity = '0';
                formRegist.style.display = "none";
                formLogin.style.display = "flex";
            }
        }, 1000);

        setTimeout(() => {
            formLogin.style.opacity = '1';
        }, 2000);
});

registerLink.addEventListener('click', () => {
    setTimeout(() => {
        if(formLogin.style.display = "flex"){
            formLogin.style.opacity = '0';
        }
    }, 500);

    setTimeout(() => {
        if(formLogin.style.display = "flex"){
            formRegist.style.opacity = '0';
            formLogin.style.display = "none";
            formRegist.style.display = "flex";
        }
    }, 1000);

    setTimeout(() => {
        formRegist.style.opacity = '1';
    }, 2000);
});