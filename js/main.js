const bar_a = document.querySelector(".icon-bar-a");
const bar_b = document.querySelector(".icon-bar-b");
const navbar = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".navbar-nav");
const regBtn = document.querySelector(".reg-btn");
const progressBara = document.querySelector(".progress-bar-a");
const progressBarb = document.querySelector(".progress-bar-b");
const progressBarc = document.querySelector(".progress-bar-c");
const progressBard = document.querySelector(".progress-bar-d")
const progressBare = document.querySelector(".progress-bar-e");


if (jwt && jwt !== "loggedout") {

    regBtn.innerHTML = `<a href="#" id="logout" class="button_nav">Logout</a>`;
} else {
    regBtn.innerHTML = `<a href="./login.html" class="button_nav">JOIN ME</a>`;
}

const logout = document.querySelector('#logout');


if (progressBara) {

    window.addEventListener("scroll", () => {
        progressBara.style.width = "85%";
        progressBarb.style.width = "90%";
        progressBarc.style.width = "70%";
        progressBard.style.width = "95%";
        progressBare.style.width = "75%";
    })
}



navbar.addEventListener("click", () => {
    if (bar_a.style.marginLeft == "10px") {

        bar_a.style.marginLeft = "0px";
    } else {
        bar_a.style.marginLeft = "10px";
    }
    if (bar_b.style.marginLeft == "-10px") {

        bar_b.style.marginLeft = "0px";
    } else {
        bar_b.style.marginLeft = "-10px";
    }
    if (menu.style.opacity == "1") {
        menu.style.opacity = "0"
        menu.style.height = "0px"
    } else {
        menu.style.opacity = "1"
        menu.style.height = "340px"
    }


});

if (logout) {
    logout.addEventListener('click', async (e) => {
        e.preventDefault();

        document.cookie = "jwt=loggedout";
        localStorage.setItem(`user_id`, ``);
        localStorage.setItem(`user_email`, ``);
        localStorage.setItem(`user_name`, ``);
        popup(success, 'Logged out successfully');
        setTimeout(() => {
            location.reload();
        }, 3000);
    });
}
