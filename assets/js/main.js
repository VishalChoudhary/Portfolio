/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-closing')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink=document.querySelectorAll('.nav-link');
//looped through all the nav items and onclick closed the menu option   
function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent=document.getElementsByClassName('skills-content'),
    skillsHeader=document.querySelectorAll('.skills-header');

function toggleSkills(){
    let itemClass=this.parentNode.className;
    console.log(itemClass);
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills-content skills-close';
    }
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className= 'skills-content skills-open';
    }
}
skillsHeader.forEach((eL)=>{
    eL.addEventListener('click',toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 