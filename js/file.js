
















let landingPage =document.querySelector(".lading_page");
let imgArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
landingPage.style.background =`url("../img/3.jpg")`;


setInterval(()=>
{
   
    let randomNumber=Math.floor(Math.random()*imgArray.length);
    landingPage.style.background ='url("../img/'+imgArray[randomNumber]+'")';
},7000);

