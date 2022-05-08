const latestBlogs = document.querySelector('.latest_blogs');
const registrationCard = document.querySelector('.blog_right_sidebar');

const sideBlogs = fetch(`${globalURL}/api/v1/blogs`)
    .then(data => data.json());

sideBlogs.then(res => {
    res.data.blogs.map(blog => {
        let date = `${new Date(blog.date)}`.split(" ");
        latestBlogs.innerHTML += ` <div class=" post_item">
        <img src="${globalURL}/img/blog/${blog.image}" alt="post">
        <div class="post_item_content">
            <a href="./blog-details.html?blog_id=${blog._id}">
                <h3>${blog.title.slice(0, 30)}...</h3>
            </a>
            <p>${date[0]} ${date[1]} ${date[2]} ${date[3]}</p>
        </div>
    </div>`
    })
})
if (jwt && jwt === "loggedout") {
    console.log(jwt)
    registrationCard.innerHTML += (`<aside class="single-sidebar-widget newsletter_widget">
    <h4 class="widget_title">Newsletter</h4>
    <p>
        Here, I focus on a range of items and features that we use in life
        without giving them a second thought.
    </p>
    <div class="form-group">
        <a href="/signup.html" class="bbtns">Signup</a>
    </div>
    <p class="text-bottom">You can unsubscribe at any time</p>
    <div class="br"></div>
</aside>`)
}