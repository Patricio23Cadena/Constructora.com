/* PAGINA SOMOS*/

let title_somos="Nuestra Empresa";
let imagen_somos="<img src=img/ilustracion2.svg alt=Somos title=Somos class= imagen-about-us></img>";


/*MISION Y VISION*/
let title_mision="Misión";
let textomision = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur, velit doloribus laboriosam ut."
let title_vision =  "Visión";
let textovision = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur, velit doloribus laboriosam ut."




const contenedor_somos = document.querySelector("#contenedor_somos");
contenedor_somos.innerHTML = ` 
<h2 class="titulo">${title_somos}</h2>
            <div class="contenedor-sobre-nosotros">
            ${imagen_somos}
                <div class="contenidotextos" id="contenidotextos" >                   
                </div>
            </div>

`; 

const contenidotextos = document.querySelector("#contenidotextos");
contenidotextos.innerHTML = `                       
<h3><span>1</span> ${title_mision}</h3>
<p>${textomision}</p>
<br>
    <h3><span>2</span>${title_vision}</h3>
<p>${textovision} </p>


 
    <audio  autoplay> 
    <source src="multimedia/somos.mp3" type="audio/mp3"> 
    </audio> 
`;


