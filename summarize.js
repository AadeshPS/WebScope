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
// var num_para = document.getElementsByTagName("p");
// var sum_words = 0;
// for (var i = 0; i<para_content.length;i++)
// {
//     var par_portion = num_para[i].textContent;
//     var words = par_portion.split(" ");
//     var num_of_words = words.length;
//     sum_words += num_of_words
    

// }
// var reading_time = parseInt(sum_words/238);//taking the average reading time is 238 words per minute
// console.log(reading_time + " min is the average reading time");

var num_para = document.getElementsByTagName("cite");
var sum_words = 0;

for (let i = 0; i<num_para.length;i++)

{
    var url_ = "";
    var cite_ = num_para[i].textContent;
    var link_ = cite_.split(" › ");
    console.log(link_);
    for (let index = 0; index < link_.length; index++) {
         if (index === 0)
         {
            url_ = url_ + link_[index];
            console.log(url_)
         }
         else
         {
            url_ = url_ + "/" + link_[index];
         }
        
    }

    console.log(url_);

}
var reading_time = parseInt(sum_words/238);//taking the average reading time is 238 words per minute
console.log(reading_time + " min is the average reading time");

// getting the url of the current page
// var pathname = window.location.href;
// var input = pathname.split("?");
// var ans = input[0];
// console.log(ans);
})


