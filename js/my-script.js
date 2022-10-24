const PROJ_IMG = "my_projects";
const SERVICES_IMG = "my_services";

//document.getElementById("title-h1").innerText = data.title;
document.getElementById("top-description").innerText = data.top_description;
document.getElementById("about-my-works").innerText = data.about_my_works;
document.getElementById("my_youtube_href").href = data.my_youtube;

document.querySelectorAll(".my_telegram_href").forEach(item => {
    item.href = data.my_telegram;
});

document.querySelectorAll(".my_gitlab_href").forEach(item => {
    item.href = data.my_gitlab;
});

document.querySelectorAll(".my_github_href").forEach(item => {
    item.href = data.my_github;
});

const topMyServices = document.getElementById("top-my-services");

if(topMyServices){
    let div;

    data.top_my_services.forEach(item => {

        div = document.createElement("div");
        div.innerHTML = `<div class="span6">
        <div class="centered service">
            <div class="circle-border zoom-in">
                <img class="img-circle" src="` + SERVICES_IMG + `/` + item.img + `" alt="` + item.title + `">
            </div>
            <h3>` + item.title + `</h3>
            <div class="top-my-services-descr">` + item.description_html + `</div>
        </div>
    </div>`

        topMyServices.appendChild(div);
    });
}

const mySkills = document.getElementById("my-skills");

if(mySkills){
    let li;
    const skills = data.skills;

    skills.forEach(item => {

        li = document.createElement("li");
        li.innerHTML = `<span class="bar" data-width="` + item.per + `%"></span>
        <h3>` + item.name + `</h3>`

        mySkills.appendChild(li);
    });
}


const myWorksHref = document.getElementById("my-works-href");
if (myWorksHref && data.my_works){

    let li, a;
    const myWorks = data.my_works;

    myWorks.forEach(item => {
        a = document.createElement("a");
        a.href = "#noAction";
        a.innerText = item.title;

        li = document.createElement("li");
        li.classList.add("filter");
        li.setAttribute("data-filter", item.href);

        li.appendChild(a);
        myWorksHref.appendChild(li);
    });
}


const myWorksBox = document.getElementById("single-project");
if (myWorksBox && data.my_works){
    
    let div, i = 0;
    const myWorks = data.my_works;

    myWorks.forEach(category => {

        category.works.forEach(proj => {
            ++i;

            div = document.createElement("div");
            div.classList.add("toggleDiv", "row-fluid", "single-project");
            div.setAttribute("id", "slidingDiv" + i);
            
            div.innerHTML = `<div class="span6">
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
                    <div class="project-info">
                        <div><span>Дата:</span>` + proj.date + `</div>
                        <div><span>Технологии:</span>` + proj.skills + `</div>
                        <div><span>Ссылка:</span><a href="` + proj.link + `">` + proj.link + `</a></div>
                        <div>` + proj.description + `</div>

                    </div>
                    <p>` + proj.description + `</p>
                </div>`;
        
            myWorksBox.appendChild(div);

        });
    });


    const myWorksGrid = document.createElement("ul");
    myWorksGrid.setAttribute("id", "portfolio-grid");
    myWorksGrid.classList.add("thumbnails", "row");

    i = 0;
    
    myWorks.forEach(category => {

        category.works.forEach(proj => {
            ++i;

            li = document.createElement("li");
            li.classList.add("span4", "mix", category.href);
            
            li.innerHTML = `<div class="thumbnail">
            <img src="` + PROJ_IMG + `/`  + category.href + `/` + proj.img + `" alt="` + proj.title + `">
            <a href="#single-project" class="more show_hide" rel="#slidingDiv` + i + `">
                <i class="icon-plus"></i>
            </a>
            <h3>` + proj.title_mini + `</h3>
            <p>` + proj.description_mini + `</p>
            <div class="mask"></div>
        </div>`;
        
            myWorksGrid.appendChild(li);

        });
    });

    myWorksBox.appendChild(myWorksGrid);

}
