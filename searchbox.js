var b=16;
var a=32;

const newdiv = document.createElement("div");
newdiv.style.width="230px";
newdiv.style.height="45px";
newdiv.style.borderColor ="green";
newdiv.style.borderWidth="2px";
newdiv.style.borderStyle="solid";

var textElement = document.createElement("p");
 textElement.textContent = a+ " MIN   |   " +b+" Outer Links";
 textElement.style.position = "relative";
 textElement.style.top = "3%";
 textElement.style.left = "25%";
 newdiv.appendChild(textElement);

newdiv.style.fontSize="13px";
newdiv.style.color="black";
newdiv.style.fontFamily="Trebuchet MS, sans-serif";
newdiv.style.backgroundColor="white";

const new_div = document.createElement("div");
new_div.style.width="30px";
new_div.style.height="10px";
new_div.style.backgroundColor="white";


new_div.style.position="relative";
new_div.style.top="-83%";
new_div.style.left="4%";
new_div.style.width="40px";
new_div.style.height="40px";
 var imag=document.createElement("img");
 imag.setAttribute("src","fafa.jpg");
 imag.setAttribute("height","40");
 imag.setAttribute("width","40");
 imag.style.position="center";
new_div.appendChild(imag);
newdiv.appendChild(new_div);
document.body.appendChild(newdiv);


