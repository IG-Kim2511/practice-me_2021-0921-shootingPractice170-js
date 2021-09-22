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


