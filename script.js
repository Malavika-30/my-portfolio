const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===============================
// 3D CARD TILT EFFECT
// ===============================


const cards=document.querySelectorAll(
".skill-box,.experience-card,.education-content,.achievement-card,.project-card"
);



cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect=card.getBoundingClientRect();


const x=e.clientX-rect.left;

const y=e.clientY-rect.top;


const centerX=rect.width/2;

const centerY=rect.height/2;


const rotateX=
((y-centerY)/centerY)*10;


const rotateY=
((x-centerX)/centerX)*10;



card.style.transform=
`
perspective(900px)
rotateX(${-rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});



card.addEventListener("mouseleave",()=>{


card.style.transform=
`
perspective(900px)
rotateX(0)
rotateY(0)
translateY(0)
`;


});


});
const projectSlider =
document.querySelector(".project-container");


document.querySelector(".next-project")
.onclick=()=>{

projectSlider.scrollLeft +=420;

}



document.querySelector(".prev-project")
.onclick=()=>{

projectSlider.scrollLeft -=420;

}
const projectCards=document.querySelectorAll(".project-card");


projectCards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let rect=card.getBoundingClientRect();


let x=e.clientX-rect.left;

let y=e.clientY-rect.top;


let rotateY=(x-rect.width/2)/20;

let rotateX=-(y-rect.height/2)/20;


card.style.transform=
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});


card.addEventListener("mouseleave",()=>{

card.style.transform="";

});


});