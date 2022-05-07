
let projectsCard = document.querySelector('.projects-api');
const projects = fetch(`${globalURL}/api/v1/projects`)
    .then(data => data.json());


projects.then(res => {
    res.data.projects.map(project => {
        projectsCard.innerHTML += ` <div class="h_gallery_item">
        <div class="g_img_item">
          <img class="img-fluid" src="${globalURL}/img/project/${project.image}" alt="" />
        </div>
        <div class="g_item_text">
          <h4>${project.title}</h4>
          <a href="${project.link}" class="main_btn"
            >view project <i class="fa fa-long-arrow-right"></i
          ></a>
        </div>
      </div>`
    })
})