const rootNode = document.getRootNode()
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode);

// const htmlChildNode = htmlElementNode.childNodes;
// // console.log(htmlChildNode);// NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// // console.log(headElementNode);
// const textNode1 = htmlElementNode.childNodes[1];
// // console.log(textNode1);
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode.parentNode); 



//sibling

// console.log(headElementNode.nextElementSibling); 
// console.log(bodyElementNode.previousSibling.previousSibling); 

// task
// const rootNode = document.getRootNode() //document
// const htmlNode = rootNode.childNodes[0];// html
// const bodyNode = htmlNode.childNodes[2]; // body
// const divNode = bodyNode.childNodes[1] // div.container
// const h1Node = divNode.childNodes[1] // h1

// console.log(h1Node);


// task
// const h1Node = document.querySelector("h1") // h1
// const divNode = h1Node.parentNode; //div
// const bodyNode = h1Node.parentNode.parentNode; //body

// divNode.style.backgroundColor = "red";
// bodyNode.style.backgroundColor = "green";
//end

const body = document.querySelector("body");
const bodyChildren = body.children;
const head = document.head;

const container = body.querySelector(".container")
// console.log(title);

console.log(container.children);



 

