var minibox = document.createElement("div")
var par = document.createTextNode("you are on fire")
minibox.appendChild(par)
document.body.appendChild(minibox)


minibox.style.position = "absolute"
minibox.style.top= "50px"
minibox.style.left= "200px"
minibox.style.border= "5px solid red"
minibox.style.padding= "2px"
minibox.style.zIndex = "1000000"
minibox.addEventListener("click",() => { minibox.style.display = "none";



//getting the url of the current page
var pathname = window.location.href;
var input = pathname.split("?");
var ans = input[0];
console.log(ans);
})




