const email = document.myform.email.value;
const valiDate = document.querySelector('validation');
const input = document.querySelector('input');

// function validate() {
//     var atposition = x.indexOf("@");
//     var dotposition = x.lastIndexOf(".");
//     if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
//         valiDate.innerHTML =
//             ` 
//     <img src="../images/icon-error.svg>
//     `
//         input.classList.add('invalid');

//         return false;
//     }
// }

function emailValidate() {
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            alert("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
}