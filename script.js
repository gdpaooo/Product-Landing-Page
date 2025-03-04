let footerBottom = document.getElementById("footer-bottom");
console.log(footerBottom);
footerBottom.style.margin = "5px";
footerBottom.style.fontFamily = "Arial, Helvetica, sans-serif";
footerBottom.style.textAlign = "center";
footerBottom.style.fontSize = "7px";
footerBottom.style.width = "100%";
footerBottom.style.maxWidth = "1280px";


let images = document.getElementsByTagName("img");
console.log(images);
images[1].style.height = "120px";
images[2].style.height = "120px";
images[3].style.height = "120px";


let header1 = document.getElementsByTagName("h1");
console.log(header1);
header1[0].style.fontSize = "45px";


let header2 = document.querySelectorAll("h2");
console.log(header2);
header2[0].style.fontSize = "30px";
header2[1].style.fontSize = "30px";
header2[2].style.fontSize = "30px";


let header3 = document.querySelectorAll("h3");
console.log(header3);
header3[0].style.fontSize = "22px";
header3[1].style.fontSize = "22px";
header3[2].style.fontSize = "22px";
header3[3].style.fontSize = "22px";
header3[4].style.fontSize = "22px";
header3[5].style.fontSize = "22px";
header3[6].style.fontSize = "22px";
header3[7].style.fontSize = "22px";
header3[8].style.fontSize = "22px";
header3[9].style.fontSize = "22px";


let submit= document.getElementById("submit");
console.log(submit);
function thankYou() {
    alert("Thank you for signing up to our newsletter!");
}
submit.addEventListener('click', thankYou);