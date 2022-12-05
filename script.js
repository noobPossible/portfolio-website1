let menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".nav");

menu.onclick = () => {
    nav.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
window.onscroll = () => {
    nav.classList.remove("open-menu")
    menu.classList.remove("move");
}

// Emailing setup
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let message = document.querySelector(".message");
    let send = document.querySelector(".send-btn");

    send.addEventListener('click', (e) => {
        e.preventDefault();
            if(name.value == "" || email.value == "" || message.value == ""){
                emptyerror();
            }
            else{
                sendmail(name.value, email.value, message.value);
                success();
            }
    })
}
validate();

function sendmail(name, email, message){
    emailjs.send("service_i6eqtok","template_rcodbdv",{
        from_name: email,
        to_name: name,
        message: message,
        });
}

function emptyerror() {
    swal({
        title: "stop!",
        text: "Input required!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Message sent successfully!",
        text: "We usually reply with 24 business hrs",
        icon: "success",
    });
}

// Header behaviour on scroll
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});