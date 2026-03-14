

/* SCROLL REVEAL */

function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll", reveal);

const links = document.querySelectorAll(".nav-links a");
const indicator = document.querySelector(".nav-indicator");

function moveIndicator(element){
const rect = element.getBoundingClientRect();
const parentRect = element.parentElement.parentElement.getBoundingClientRect();

indicator.style.width = rect.width + "px";
indicator.style.left = (rect.left - parentRect.left) + "px";
}

links.forEach(link=>{
link.addEventListener("mouseenter",()=>{
moveIndicator(link);
});
});

window.addEventListener("load",()=>{
const active = document.querySelector(".nav-links a.active");
if(active){
moveIndicator(active);
}
});
/* FADE IN ON SCROLL */

const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
}, {
threshold:0.2
});

faders.forEach(el => {
observer.observe(el);
});

/* ACCORDION (Vision / Mission / Beliefs) */

const titles = document.querySelectorAll(".accordion-title");

titles.forEach(title => {

title.addEventListener("click", () => {

const item = title.parentElement;
const content = title.nextElementSibling;

item.classList.toggle("active");

if(content.style.maxHeight){
content.style.maxHeight = null;
}else{
content.style.maxHeight = content.scrollHeight + "px";
}

});

});

links.forEach(link=>{
link.addEventListener("click",()=>{
links.forEach(l => l.classList.remove("active"));
link.classList.add("active");
moveIndicator(link);
});
});

/* ============================= */
/* PAGE LOADING ANIMATION */
/* ============================= */

const loader = document.createElement("div");
loader.style.position="fixed";
loader.style.top="0";
loader.style.left="0";
loader.style.width="100%";
loader.style.height="100%";
loader.style.background="#0b2c5c";
loader.style.display="flex";
loader.style.alignItems="center";
loader.style.justifyContent="center";
loader.style.color="white";
loader.style.fontSize="28px";
loader.style.zIndex="9999";
loader.innerHTML="Loading MoonStar...";
document.body.appendChild(loader);

window.addEventListener("load",()=>{
setTimeout(()=>{
loader.style.opacity="0";
loader.style.transition="0.6s";
setTimeout(()=>{
loader.remove();
},600);
},500);
});


/* ============================= */
/* SCROLL PROGRESS BAR */
/* ============================= */

const progressBar = document.createElement("div");

progressBar.style.position="fixed";
progressBar.style.top="0";
progressBar.style.left="0";
progressBar.style.height="4px";
progressBar.style.width="0%";
progressBar.style.background="#c6a74a";
progressBar.style.zIndex="9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

let scrollTop = document.documentElement.scrollTop;
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let progress = (scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});


/* ============================= */
/* HERO PARALLAX EFFECT */
/* ============================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let offset = window.scrollY;

if(hero){
hero.style.backgroundPositionY = offset * 0.5 + "px";
}

});


/* ============================= */
/* STATS AUTO COUNT ANIMATION */
/* ============================= */

const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter=>{

let target = counter.innerText.replace("+","");
target = parseInt(target);

let count = 0;

let update = ()=>{

let increment = target / 80;

count += increment;

if(count < target){

counter.innerText = Math.floor(count) + "+";

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

});


/* ============================= */
/* STAR BACKGROUND GENERATOR */
/* ============================= */

const starsContainer = document.querySelector(".stars");

if(starsContainer){

for(let i=0;i<120;i++){

let star = document.createElement("div");

star.style.position="absolute";
star.style.width="2px";
star.style.height="2px";
star.style.background="white";
star.style.borderRadius="50%";

star.style.top=Math.random()*100+"%";
star.style.left=Math.random()*100+"%";

star.style.opacity=Math.random();

star.style.animation="twinkle "+(2+Math.random()*4)+"s infinite alternate";

starsContainer.appendChild(star);

}

}


/* ============================= */
/* SMOOTH SCROLL IMPROVER */
/* ============================= */

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});

document.querySelectorAll(".academic-image").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("active");
  });
});
