/*NAVEGACION*/ 
const navegacion_name=["Somos","Servicios","Proyectos","Blog","Contáctanos","Login"];
var title_header=["BIENVENIDO","A NUESTRO PORTAL"];
const textosheader = document.querySelector("#textosheader");
/* FOOTER */
 
var imagenes_footer_texto=[ "Teléfono",
                            "<img src =img/whatsapp.png alt=WhatsApp title=WhatsApp/>",
                            "Email",
                            "<img src =img/mail.png alt=Email title=Email/>",
                            "Ubicación",
                            "Av. de los Granados y Eloy Alfaro N4642",
                            "&COPY; Proyecto Integrador"]; 


const nav = document.querySelector("#nav");
nav.innerHTML = `           
<a id="principio" href="index.html">${navegacion_name[0]}</a>
<a href="servicio.html">${navegacion_name[1]}</a>
<a href="proyecto.html">${navegacion_name[2]}</a>
<a href="blog.html">${navegacion_name[3]}</a>
<a href="contactanos.html">${navegacion_name[4]}</a>
<a href="login.html">${navegacion_name[5]}</a>
<button  id="oscuroB1"></button>
` ;

const respmenu = document.querySelector("#respmenu");
respmenu.innerHTML = `   
<div class="login">
<div id="hamburger"> 
    <span></span>
    <span></span>
    <span></span>
</div>
<button  id="oscuroB2"></button>

</div>

<input type="checkbox">
<nav  class="menu">
<ul>
<li><a href="index.html">${navegacion_name[0]}</a></li>
<li><a href="servicio.html">${navegacion_name[1]}</a></li>
<li><a href="proyecto.html">${navegacion_name[2]}</a></li>
<li><a href="blog.html">${navegacion_name[3]}</a></li>
<li><a href="contactanos.html">${navegacion_name[4]}</a></li>
<li><a href="login.html">${navegacion_name[5]}</a> </li>
</ul>
</nav>       


` ;

textosheader.innerHTML = `           
<h1>${title_header[0]}</h1>
<h2>${title_header[1]}</h2>` ;

const wave = document.querySelector("#wave");
wave.innerHTML = `           
<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" >
                </path>
` ; 

const footer = document.querySelector("#footer");
footer.innerHTML=`                       
<div class="content-foo" >
                <h4> ${imagenes_footer_texto[0]}</h4>
                <a href ="https://api.whatsapp.com/send?phone=593961587556&text=Hola, me interesa"  target=”_blank”>
                ${imagenes_footer_texto[1]}</a>
            </div>
            <div class="content-foo">
                <h4> ${imagenes_footer_texto[2]}</h4>
                <a href="mailto:cuenta@deemail.com"> 
                ${imagenes_footer_texto[3]}</a>
            </div>
            <div class="content-foo">
                <h4> ${imagenes_footer_texto[4]}</h4>
                <p><address>${imagenes_footer_texto[5]}</address></p>
            </div> 
                <a href="#principio" ><h2 class="titulo-final">${imagenes_footer_texto[6]}</h2></a>
            </div>
        
` ;

$(document).ready( function (){   
    $("#oscuroB1").click(function(){
        $(".contenidotextos").toggleClass("contenidotextosO");
        $(".portafolio").toggleClass("portafolioO");
        $(".titulo").toggleClass("contenidotextosO");
        $("path").toggleClass("path2");
        $("button").toggleClass("button2");
        $(".contenedor").toggleClass("contenidotextosO");
        $("label").toggleClass("contenidotextosO");
        $("form .boton").toggleClass("colorboton");
        $("form input").toggleClass("colorboton"); 
        $("form input ").toggleClass("fondoinput"); 
        $("form textarea").toggleClass("fondoComen");
        $(".card1").toggleClass("contenidotextosO");
        $(".card2").toggleClass("contenidotextosO");
        $(".card3").toggleClass("contenidotextosO");
        $(".card4").toggleClass("contenidotextosO");
        $(".fadeIn.first").toggleClass("contactanos");
        $(".formContent form").toggleClass("fondoLogin");
        $(".formFooter").toggleClass("fomFooterI");
       
    });
   
});
 

$(document).ready( function (){   
    $("#oscuroB2").click(function(){
        $(".contenidotextos").toggleClass("contenidotextosO");
        $(".portafolio").toggleClass("portafolioO");
        $(".titulo").toggleClass("contenidotextosO");
        $("path").toggleClass("path2");
        $("button").toggleClass("button2");
        $(".contenedor").toggleClass("contenidotextosO");
        $("label").toggleClass("contenidotextosO");
        $("form .boton").toggleClass("colorboton");
        $("form input").toggleClass("colorboton");  
        $("form textarea").toggleClass("fondoComen");
        $(".card1").toggleClass("contenidotextosO");
        $(".card2").toggleClass("contenidotextosO");
        $(".card3").toggleClass("contenidotextosO");
        $(".card4").toggleClass("contenidotextosO");
        $(".fadeIn.first").toggleClass("contactanos");
        $(".formContent form").toggleClass("fondoLogin");
        $(".formFooter").toggleClass("fomFooterI");
    });
   
});


 