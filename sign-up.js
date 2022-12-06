function call(){
    window.location.href = "./index.html";
}
function register(){
    const acno = regAccNum.value;
    const uname = regName.value;
    const pswd = regPswd.value;
    const balance = 2000;


    const acnoDetails = {
        acno,
        uname,
        pswd,
        balance
    }
    if (acno in localStorage){
        alert('account number already exits')
    }
    else {
        localStorage.setItem(acno,JSON.stringify(acnoDetails));
        alert('Registration Successfull');
        window.location.href = './index.html';
    }
}