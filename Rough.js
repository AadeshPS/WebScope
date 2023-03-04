//getting no of links in the webpage
const num_of_links=() =>{
let count=0;
const hrefs=[];
const num_link=document.getElementsByTagName("a");
for(let i=0;i<num_link.length;i++){
  let link_att=num_link[i];
  let href_att=link_att.getAttribute("href")
    hrefs.push(href_att);
    count+=1;

}
console.log(count);
return count;
}

//getting all headings in the webpage to an array

const all_headings=() => {
    const hdngs=[];
    const heading1=document.getElementById(h1);
    const heading2=document.getElementById(h2);
    const heading3=document.getElementById(h3);
    const heading4=document.getElementById(h4);
    if (heading1){
        for(let i=0;i<heading2.length;i++){
            const text=heading2[i].textContent;
            hdngs.push(text);
        }
    }
    else if(heading2){
            for(let i=0;i<heading3.length;i++){
                const text=heading3[i].textContent;
                hdngs.push(text);
            }

    }
    else{
        for(let i=0;i<heading4.length;i++){
            const text=heading4[i].textContent;
            hdngs.push(text);
        }

    }
    return hdngs;
    }