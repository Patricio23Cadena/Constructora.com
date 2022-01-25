/*Servicio */ 
let title_servicios="Nuestros Servicios";
var imagenes_slides=["<img src=img/service.png alt=Servicio1 title=Servicios1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "<img src=img/service2.png alt=Servicio2 title=Servicios2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "<img src=img/service.png alt=Servicio3 title=Servicios3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "<img src=img/service2.png alt=Servicio4 title=Servicios4>",
                    "<image src=img/ilustracion1.svg alt=Servicio5 title=Servicio5>",
                    "<image src=img/ilustracion4.svg alt=Servicio6 title=Servicio6>",
                    "<image src=img/ilustracion3.svg alt=Servicio7 title=Servicio7>"];

let title_servicios1="Servicio";
let texto_servicio1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?";
let title_servicios2="Servicio";
let texto_servicio2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?";
let title_servicios3="Servicio";
let texto_servicio3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?";


const content = document.querySelector("#content");
content.innerHTML = `                       
<h2 class="titulo">${title_servicios}</h2>
<marquee  scrolldelay="1" scrollamount="30" direction="left" loop="infinite">                       
${imagenes_slides[0]} 
${imagenes_slides[1]} 
${imagenes_slides[2]} 
${imagenes_slides[3]}
</marquee>
`;




const contenidoservicio = document.querySelector("#contenidoservicio");
contenidoservicio.innerHTML = `                       
${imagenes_slides[4]}
<h3>${title_servicios1}</h3>
<p>${texto_servicio1}</p>
`;



const contenidoservicio2 = document.querySelector("#contenidoservicio2");
contenidoservicio2.innerHTML = `                    
${imagenes_slides[5]}
<h3>${title_servicios2}</h3>
<p>${texto_servicio2}</p>
`;



const contenidoservicio3 = document.querySelector("#contenidoservicio3");
contenidoservicio3.innerHTML = `                      
${imagenes_slides[6]}
<h3>${title_servicios3}</h3>
<p>${texto_servicio3}</p>
` ;


 
 