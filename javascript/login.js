document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mobileNumber = document.getElementById('mobile-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        
        if(mobileNumber=== '01846552436' && pinNumber=== '1234')
        {
            alert("welcome to the Home Page");
            // window.location.href="/homepage.html"; eivabew lekha jay
            window.location.replace("homepage.html");
        }
        else
        {
            alert("login failed! Pls try again.");
        }

        document.getElementById('mobile-number').value = "";
        document.getElementById('pin-number').value = "";
    });