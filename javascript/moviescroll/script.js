let image = document.getElementById('mposter');
let btn1 = document.getElementById('m1');
let btn2 = document.getElementById('m2');
let btn3 = document.getElementById('m3');
let btn4 = document.getElementById('m4');
let btn5 = document.getElementById('m5');
let btn6 = document.getElementById('m6');

let image1,image2,image3,imag4;
image1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2NzEMBZbaPjaYx84gdiXju6x5nU3hjmAlA&s';
image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCfnxVHZRjl1u7JYNV86fc1wAcPAZerVm6A&s";
image3="https://i.ytimg.com/vi/kJp0wkIt0eE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAe_2xpPEon6yn745A1JBN31XcZ4A";
image4="https://gaming-cdn.com/images/products/15888/orig/uncharted-drake-s-fortune-remake-pc-game-cover.jpg?v=1749197865";
btn1.addEventListener('click', () => {
    image.src = image1;
});
btn2.addEventListener('click', () => {
    image.src = image2;
});
btn3.addEventListener('click', () => {
    image.src = image3;
});
btn4.addEventListener('click', () => {
    image.src = image4;
});
btn5.addEventListener('click', () => {
    image.src = "https://images.moviesanywhere.com/2403bcb69521aa97f559e57bb99307d6/04cae607-c5c8-4557-bfec-b555435f758b.jpg";
});
btn6.addEventListener('click', () => {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrgxFfcq_IeAuywWUUlcMlukiU8AyAz28rg&s";
});


let nxt=document.getElementById('next');
let prev=document.getElementById('prev');
let index=0;
let totalslides=4;
let slideframe=document.getElementById('sliderfr');

nxt.addEventListener('click',()=>{
    index++;
    if(index>=totalslides){
        index=0;
    }
    slideframe.style.transform=`translatex(-${index*250}px)`;
});
prev.addEventListener('click', ()=>{
    index--;
    if(index<0){
        index=totalslides-1;
    }
    slideframe.style.transform=`translatex(-${index*250}px)`;
});
