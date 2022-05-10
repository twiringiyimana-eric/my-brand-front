
let blogsCard = document.querySelector('.blog_item_b');
const blogs = fetch(`${globalURL}/api/v1/blogs`)
  .then(data => data.json());


blogs.then(res => {
  res.data.blogs.map(blog => {
    const newLikes = blog.likedBy;
    let date = `${new Date(blog.date)}`.split(" ");
    blogsCard.innerHTML += `<div class="blog_post">
        <img src="${globalURL}/img/blog/${blog.image}" alt="">
        <div class="blog_info">
            <ul class="blog_meta list">
                <li><a href="#">${date[0]} ${date[1]} ${date[2]} ${date[3]}<i class="lnr lnr-calendar-full"></i></a></li>
                <li onclick="handleLike('${blog._id}')">
                ${blog.likedBy.length} Like${blog.likedBy.length > 1 ?
        "s" : ""}<i
                  class="fa fa-heart${newLikes.indexOf(localStorage.user_id) >= 0 ? '' : '-o'}"
                ></i>
              </li>
              <li>
                <a href="/blog-details.html?blog_id=${blog._id}"
                  >${blog.comments.length} Comment${blog.comments.length > 1 ? "s" : ""}<i
                    class="lnr lnr-bubble"
                  ></i
                ></a>
              </li>
            </ul>
        </div>
        <div class="blog_details">
            <a href="./blog-details.html?blog_id=${blog._id}"><h2>${blog.title}</h2></a>
            <p>${blog.body.slice(0, 150)}...</p>
            <a href="./blog-details.html?blog_id=${blog._id}" class="white_bg_btn">View More</a>
        </div>
    </div>`
  })
})