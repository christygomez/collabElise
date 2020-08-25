function logfunc(){
    console.log('logfunc is running');
    const cache = {christy: 'password123'};

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username,password);

    if (cache[username] === password) {
        window.location.href = "feed.html";
    }
}// CODE HERE