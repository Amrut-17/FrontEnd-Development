// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Moving animation event
container.addEventListener('mousemove', (e)=>{
    // console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// ANIMATE IFFERENT ITEMS
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Animate IN
container.addEventListener('mouseenter', e=> {
    card.style.transition = "none";
    //pop out effect ie 3D effect
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(125px)';
    description.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(100px)';
})



// Animate OUT
container.addEventListener('mouseleave', e=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //pop - back undo 3D effect 
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';

})







