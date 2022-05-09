let arrows = document.querySelectorAll('.movies-arrow');

let movieLists =  document.querySelectorAll('.movie-list-wrapper');

let ball = document.querySelector(".toggle-ball");
let items = document.querySelectorAll('.container , .nav , .sidebar , .icon , .nav-container , .toggle , h2 , .main');


arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrow.addEventListener('click' , ()=>{
        const ratio = Math.floor(window.innerWidth / 285)
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
            }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    })
})

ball.addEventListener('click' , ()=>{
    items.forEach(item=>{
        item.classList.toggle('active');
    })
    ball.classList.toggle('active');
})


let watchButton = document.querySelectorAll('.movie-list-button');
let featureBG = document.querySelector('.featured-content');

watchButton.onclick = function(){
    featureBG.style.backgroundColor="black";
}





