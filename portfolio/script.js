"use strict"
// const
const aboutMajors = document.querySelector('.about__majors');






// 🍀js 10  <div class="about__majors">
/* 
let div = document.createElement('div');
div.innerHTML=`
    <div class="major">
    <div class="major__icon"><i class="fab fa-html5"></i></div>
    <h2 class="major__title">html</h2>
    </div>
`;
aboutMajors.appendChild(div);
 */
class Majors {
    constructor(a_icon,b_title){
        let div = document.createElement('div');
        div.innerHTML=`
            <div class="major">
            <div class="major__icon">${a_icon}</div>
            <h2 class="major__title">${b_title}</h2>
            </div>
        `;
        aboutMajors.appendChild(div);
    }
}

let newMajor = new Majors(`<i class="fab fa-html5"></i>`,"html");
let newMajor2 = new Majors(`<i class="fab fa-css3-alt"></i>`,"CSS");
let newMajor3 = new Majors(`<i class="fab fa-js-square"></i>`,"Javascript");
let newMajor4 = new Majors(`<i class="fab fa-react"></i>`,"React");



/*🍀 c 58 (js 58).. show navbar with scroll (make navbar transparent when it is on the top)*/


const navbar = document.querySelector("#navbar");


const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if (window.scrollY >  navbarHeight) {
        navbar.classList.add('navbar--dark');
        
    } else {
        
        navbar.classList.remove('navbar--dark');
    }
});

/* js 60-4. Handle click  on the 'arrow up' button */

const homeContactBtn = document.querySelector(".home__contact");

function scrollfunction(p){
    const scrollId = document.querySelector(p);
    scrollId.scrolliIntoView({behavior:'smooth'});
}


const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener('click',()=>{
    scrollfunction('#home');
});

/* c60 scrolling */



const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener('click',(e)=>{
    const datasetLink = document.querySelector(e.target.dataset.link);
    datasetLink.scrolliIntoView({behavior:'smooth'});

    if (e.target.dataset.link == null) {
        return


        
    }
    navbarMenu.classList.remove('open');
});

// js 74

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
});

/* 94 */


const home = document.querySelector(".home__container");
const homeAvatar = document.querySelector(".home__avatar");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    homeAvatar.style.opacity = 1- window.scrollY/ homeHeight;
});

// js 90

document.addEventListener('scroll',()=>{

    const arrowUp = document.querySelector(".arrow-up");

    if (windoww.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
        
    } else {
        arrowUp.classList.remove('visible');
        
    }
});

/*  */

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");


workBtnContainer.addEventListener("click", (e) => {

    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;

}

// 🍀(68-2)

projects.forEach((a_project)=>{

    if (filter ==='*'|| filter === a_project.dataset.type) {
        a_project.classList.remove("invisible");

    } else {
        
    }

});


projectContainer.classList.add("anim-out");

setTimeout(() => {
    projectContainer.classList.remove
}, 300);


const categorySelected = document.querySelector(".category__btn.selected");

if (categorySelected !=null) {
    categorySelected.classList.remove('selected');
    
}