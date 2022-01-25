let title_blog="Blog";
let textoseccion1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur, velit doloribus laboriosam ut."
let titulo1 =  "Sección 1";
let textoseccion2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur, velit doloribus laboriosam ut."
let titulo2 =  "Sección 2";
let textoseccion3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur, velit doloribus laboriosam ut."
let titulo3 =  "Sección 3";
let textoseccion4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur, velit doloribus laboriosam ut."
let titulo4 =  "Sección 4";



const titleg_blog=document.querySelector("#titleg_blog")
titleg_blog.innerHTML = ` 
<center><h2 class="titulo">${title_blog}</h2></center>
`; 

const seccion1 = document.querySelector("#seccion1"); 
seccion1.innerHTML = ` 
<h3> ${titulo1} </h3>
<p> ${textoseccion1} </p>
<br>`  
; 


const seccion2 = document.querySelector("#seccion2");
seccion2.innerHTML = `                       
<h3> ${titulo2} </h3>
<p> ${textoseccion2} </p>
<br>`  
; 


const seccion3 = document.querySelector("#seccion3");
seccion3.innerHTML = `                       
<h3> ${titulo3} </h3>
<p> ${textoseccion3} </p>
<br>`  
; 


const seccion4 = document.querySelector("#seccion4");
seccion4.innerHTML = `                       
<h3> ${titulo4} </h3>
<p> ${textoseccion4} </p>
<br>`  
; 