const button = document.querySelector("#btn");
const body = document.querySelector('.third-section')

button.addEventListener("click", ()=>{
    const color = randomColors();
    const newGradient = gradient();
    body.style.backgroundColor = color;
    body.style.backgroundSize = '100px 100px, 100px 100px, 50px 50px, 50px 50px';
    body.style.backgroundImage = newGradient;
    

});

function randomColors(){
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`;
}

function gradient(){
    const color1 = randomColors();
    const deg = [0, 90, 45, -45, -120, 120, 15, 20, 30, 35];
    const randomFromArray = Math.floor(Math.random() * deg.length);
    return `linear-gradient(${deg[randomFromArray]}deg, transparent 50%,
        ${color1} 50%)`;
    }

    function scrollAppear(){
        var introText = document.querySelector('.intro-text');
        var introPosition = introText.getBoundingClientRect().top;
        var introImg = document.querySelector('.img-intro');
        var imgPosition = introImg.getBoundingClientRect().top;
        var screenPositon = window.innerHeight / 1.4; 
    
        if(introPosition < screenPositon){
            introText.classList.add('intro-appear');
        }
        if(imgPosition < screenPositon){
            introImg.classList.add('intro-appear');
        }
     
    }
    
window.addEventListener('scroll', scrollAppear);

