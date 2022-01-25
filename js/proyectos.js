let title_proyectos="Nuestros Proyectos";
 
/*IMAGENES DE LOS PROYECTOS */
var imagenes_slides=["<img src=img/img1.jpg alt=Proyecto>",
                    "<img src=img/img2.jpg alt=Proyecto>",
                    "<img src=img/img3.jpg alt=Proyecto>",
                    "<img src=img/img1.jpg alt=Proyecto>",
                    "<img src=img/img4.jpg alt=Proyecto>",
                    "<img src=img/img5.jpg alt=Proyecto>",
                    "<img src=img/img6.jpg alt=Proyecto>",
                    "<img src=img/img7.jpg alt=Proyecto>"
                ];


var icono_imagenen_texto=["<img src=img/icono1.png alt=Icono>",
                          "Nuestro trabajo"];



const titulo_proyecto = document.querySelector("#titulo_proyecto");
titulo_proyecto.innerHTML = `                       
<h2 class="titulo">${title_proyectos}</h2>
` ;

 
const informacion_proyectos = document.querySelector("#informacion_proyectos");
informacion_proyectos.innerHTML = `   
<div class="imagen-port">
                        ${imagenes_slides[0]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    ${imagenes_slides[1]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    ${imagenes_slides[2]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    ${imagenes_slides[3]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    ${imagenes_slides[4]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    ${imagenes_slides[5]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    ${imagenes_slides[6]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>
                    <div class="imagen-port">
                    ${imagenes_slides[7]}
                        <div class="hover-galeria">
                        ${icono_imagenen_texto[0]}
                            <p>${icono_imagenen_texto[1]}</p>
                        </div>
                    </div>

 ` ;
