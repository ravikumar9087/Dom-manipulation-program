// innerHtml

const headline = document.querySelector(".headline")
// console.log(headline.innerHTML);
headline.innerHTML = "<h1>Inner html changed</h1>";
headline.innerHTML += "<button class = \"btn\">learn more</button>"

const btn = document.querySelector(".btn")
btn.style.backgroundColor = "red";
btn.style.margin = "10";  