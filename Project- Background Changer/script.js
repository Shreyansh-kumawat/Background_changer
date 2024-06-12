let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let text = document.getElementById("info");
let curmode = "tech";

modebtn.addEventListener("click", () => {
 if (curmode === "tech") {
    curmode = "dodge";
    body.classList.add("dodge");
    body.classList.remove("tech", "musical", "stocks");
    text.innerText = "Current Mode is ' Dodge '"; 
    text.style.position ="relative"
    text.style.left = "25%"

 } else if(curmode === "dodge")
{curmode = "musical";
    body.classList.add("musical");
    body.classList.remove("tech", "dodge", "stocks");
    text.innerText = "Current Mode is ' Musical '";
    text.style.position ="relative"
    text.style.left = "25%"
 } 
 
 else if(curmode === "musical")
    {curmode = "stocks";
        body.classList.add("stocks");
        body.classList.remove("tech", "dodge", "musical");
        text.innerText = "Current Mode is ' Stocks '";
        text.style.position ="relative"
    text.style.left = "25%"
     }
     
     else{
    curmode = "tech";
    body.classList.add("tech");
    body.classList.remove("dodge", "musical", "stocks");

    text.innerText= "Current Mode is ' Tech '"
    text.style.position ="relative"
    text.style.left = "25%"
}

 console.log(curmode);
})
 
