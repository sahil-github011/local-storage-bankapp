function call() {
    window.location.href = "./sign-up.html";
}

function login() {
    const accn = loginAcno.value;
    const pswd = loginPsswd.value;
    if (accn in localStorage) {
        const acnoDetails = JSON.parse(localStorage.getItem(accn));
        uname = acnoDetails.uname;
        if (pswd == acnoDetails.pswd) {
            alert('Login successful');
            window.location.href = "./home.html";
        } else {
            alert('incorrect password');
            uname = acnoDetails.uname;
            document.getElementById('head1').innerHTML = 'h1 content';
            window.location.href = "index.html";

        }
    } else {
        alert('no account found');
    }
    localStorage.setItem('sentvalue', uname);

}

