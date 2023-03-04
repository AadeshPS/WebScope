//import { pageinfo } from "/pageinfo.js";
if( 'function' === typeof importScripts) {
  importScripts('pageinfo.js');
}
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

//number of words on the webpage
 var num_para = document.getElementsByTagName("p");
 var sum_words = 0;
 for (var i = 0; i<num_para.length;i++)
 {
    var par_portion = num_para[i].textContent;
    var words = par_portion.split(" ");
    var num_of_words = words.length;
    sum_words += num_of_words
    

}
var reading_time = parseInt(sum_words/238);//taking the average reading time is 238 words per minute
console.log(reading_time + " min is the average reading time");

//getting all the links from google.com from the cite tag

    
const aElements = document.getElementsByTagName('a');
const num = pageinfo();
console.log(num);
for (let i = 0; i < aElements.length; i++) {
  let aElement = aElements[i];
  let citeAttribute = aElement.getElementsByTagName('cite')[0];
  
  if (citeAttribute) {
    let _link = aElement.getAttribute('href')
    //get_data(_link);
    if (_link)
    {
        var mini = document.createElement("div");
        mini.style.height = "10px"
        mini.style.width = "10px"
        mini.style.backgroundColor = "red";
        aElement.appendChild(mini);
    }
    console.log(_link)
  }


}

// getting the url of the current page
// var pathname = window.location.href;
// var input = pathname.split("?");
// var ans = input[0];
// console.log(ans);
})


