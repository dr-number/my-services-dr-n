const PROJ_IMG = "my_projects";
const SERVICES_IMG = "my_services";

//document.getElementById("title-h1").innerText = data.title;
document.getElementById("top-description").innerText = data.top_description;
document.getElementById("about-my-works").innerText = data.about_my_works;
document.getElementById("about-me").innerText = data.about_me;
document.getElementById("your-task-description").innerHTML = data.your_task_description;

document.querySelectorAll(".my_youtube_href").forEach(item => {
    item.href = data.my_youtube;
});

document.querySelectorAll(".my_telegram_href").forEach(item => {
    item.href = data.my_telegram;
});

document.querySelectorAll(".my_email_href").forEach(item => {
    item.href = "mailto:" + data.my_email_href;
    item.innerText = data.my_email_href;
});

document.querySelectorAll(".my_email_text").forEach(item => {
    item.innerHTML = data.my_email_href;
});

document.querySelectorAll(".my_gitlab_href").forEach(item => {
    item.href = data.my_gitlab;
});

document.querySelectorAll(".my_github_href").forEach(item => {
    item.href = data.my_github;
});

const topMyServices = document.getElementById("top-my-services");

if(topMyServices){
    let html = '';

    data.top_my_services.forEach(item => {

        html += `<div>
                    <div class="span6">
                        <div class="centered service">
                            <div class="circle-border zoom-in">
                                <img class="img-circle" src="` + SERVICES_IMG + `/` + item.img + `" alt="` + item.title + `">
                            </div>
                            <h3>` + item.title + `</h3>
                            <div class="top-my-services-descr">` + item.description_html + `</div>
                        </div>
                    </div>
                </div>`;
    });

    topMyServices.innerHTML = html;
}

const myWorksHref = document.getElementById("my-works-href");
if (myWorksHref && data.my_works){

    let html = '';
    const myWorks = data.my_works;

    myWorks.forEach(item => {
        html += `<li class="filter" data-filter="` + item.href + `">
                    <a href="#noAction">` + item.title + ` (` + item.works.length + `)</a>
                </li>`;
    });

    myWorksHref.innerHTML += html;
}


const myWorksBox = document.getElementById("single-project");
if (myWorksBox && data.my_works){
    
    let i = 0;
    let html = '';
    let htmlCard = '';
    let date = ''

    const myWorks = data.my_works;

    myWorks.forEach(category => {

        category.works.forEach(proj => {
            ++i;

            date = proj.date ? '<div><span>Дата:</span>' + proj.date + '</div>' : '';

            html += 
            `<div class="toggleDiv row-fluid single-project" id="slidingDiv` + i + `">
                <div class="span6">
                    <img src="` + PROJ_IMG + `/` + category.href + `/` + proj.img + `" alt="` + proj.title + `" />
                </div>
                <div class="span6">
                    <div class="project-description">
                        <div class="project-title clearfix">
                            <h3>` + proj.title + `</h3>
                            <span class="show_hide close">
                                <i class="icon-cancel"></i>
                            </span>
                        </div>
                        <div class="project-info">`
                           + date + 
                           `<div><span>Технологии:</span>` + proj.skills + `</div>
                            <div><span>Ссылка:</span><a href="` + proj.link + `">` + proj.link + `</a></div>
                        </div>
                        <p class="project-card-descr">` + proj.description + `</p>
                    </div>
                </div>
            </div>`;

            htmlCard += 
            `<li class="span4 mix mix_all ` + category.href + `">
                <div class="thumbnail animated fadeInDown">
                    <img src="` + PROJ_IMG + `/`  + category.href + `/` + proj.img + `" alt="` + proj.title + `">
                    <a href="#single-project" class="more show_hide" rel="#slidingDiv` + i + `">
                        <i class="fas fa-info-circle"></i>
                    </a>
                    <h3>` + proj.title_mini + `</h3>
                    <p>` + proj.description_mini + `</p>
                    <div class="mask"></div>
                </div>
            </li>`;

        });
    });

    html += '<ul id="portfolio-grid" class="thumbnails row">' + htmlCard + '</ul>';

    myWorksBox.innerHTML = html;
}

const mySkills = document.getElementById("my-skills");

if(mySkills){
    let html = '';
    const skills = data.skills;

    skills.forEach(item => {

        html += `<li>
                    <span class="bar" data-width="` + item.per + `%"></span>
                    <h3>` + item.name + `</h3>
                </li>`;
    });

    mySkills.innerHTML = html;
}
