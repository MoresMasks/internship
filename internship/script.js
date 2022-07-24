let start = 0;
let index = 3;
let slid = 0;
let n = 0;
const sliderLine = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
console.log(document.querySelectorAll('.slide'));
console.log(document.querySelector('.button'));
console.log(dots.length);



console.log(sliderLine[3]);
let b = document.querySelector('.button');
console.log(b.querySelector('.next-button'));
let next = b.querySelector('.next-button');
let back = b.querySelector('.back-button');


    if(sliderLine.length>3){
        for(let i = 3; i<sliderLine.length; i++){
            sliderLine[i].classList.add('block');
        }
    }



next.onclick = function(){
for(let i = start; i<dots.length;i++){
    
    dots[n].classList.remove('active');
    sliderLine[start].classList.add('block');
    sliderLine[index].classList.remove('block');
    dots[i].classList.add('active');
        }
        slid++;
    }
    
    

back.onclick = function(){
    if(slid>0){
    for(let i = slid; i>0;i--){
        dots[i].classList.remove('active');
        sliderLine[start].classList.remove('block');
        sliderLine[index].classList.add('block');
        dots[start].classList.add('active');
    }
    slid--;

}
}
