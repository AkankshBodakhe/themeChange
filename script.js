const img = document.getElementById("themechange").querySelector("img");
const text= document.getElementById("text")
const container = document.querySelector("body")
let flag=true;

function themeChange(){
    if(flag){
        text.style.color="white";
        container.style.backgroundColor = "black";
        img.setAttribute("src","./Images/image.png")
        flag=false;
    }else{
        text.style.color="black";
        container.style.backgroundColor = "white";
        img.setAttribute("src","./Images/themes.png")
        flag=true;
    }
}
