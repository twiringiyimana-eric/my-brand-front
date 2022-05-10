const bar_a = document.querySelector(".icon-bar-a");
const bar_b = document.querySelector(".icon-bar-b");
const navbar = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".navbar-nav");
const regBtn = document.querySelector(".reg-btn");
const newsWidget = document.querySelector(".news_widget");
const progressBara = document.querySelector(".progress-bar-a");
const progressBarb = document.querySelector(".progress-bar-b");
const progressBarc = document.querySelector(".progress-bar-c");
const progressBard = document.querySelector(".progress-bar-d")
const progressBare = document.querySelector(".progress-bar-e");


if (jwt && jwt !== "loggedout") {

    regBtn.innerHTML = `<a href="#" id="logout" class="button_nav">Logout</a>`;
    if (localStorage.getItem('user_role') === "admin") {

        newsWidget.innerHTML = `<aside class="f_widget news_widget">
        <div class="f_title">
        <h3>Admin</h3>
        </div>
        <div id="mc_embed_signup">
        <form target="_blank" action="#" method="get" class="subscribe_form relative">
        <div class="Newsletter_form input-group">
        <a href="${location.origin.includes("github") ? "https://uwambajeeddy.herokuapp.com/admin" : "localhost:3000/admin"}" class="btn sub-btn">Dashboard <span class="lnr lnr-arrow-right"></span>
        </a>
        </div>
        <div class="mt-10 info"></div>
        </form>
        </div>
        </aside>`;
    }
} else {
    regBtn.innerHTML = `<a href="./login.html" class="button_nav">JOIN ME</a>`;
    newsWidget.innerHTML = `<aside class="f_widget news_widget">
    <div class="f_title">
        <h3>Newsletter</h3>
    </div>
    <p>Stay updated with our latest trends</p>
    <div id="mc_embed_signup">
        <form target="_blank" action="#" method="get" class="subscribe_form relative">
            <div class="Newsletter_form input-group">
                <a href="./signup.html" class="btn sub-btn">Signup <span class="lnr lnr-arrow-right"></span> </a>
            </div>
            <div class="mt-10 info"></div>
        </form>
    </div>
</aside>`;
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
        menu.style.visibility = "hidden";
        menu.style.height = "0px"
    } else {
        menu.style.visibility = "visible";
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
