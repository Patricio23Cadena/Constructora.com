let title_contact="Contáctanos"; 
var icono_contact=["<img src=img/contact.png id=icon alt=User Icon />"];
var placeholders=["Nombres","Apellidos","Correo_Electrónico","Comentarios"];
let boton_contact="Enviar"; 

 
const formulario_contactanos = document.querySelector("#formulario_contactanos");
formulario_contactanos.innerHTML = `           
<h2 class="titulo">${title_contact}</h2>                   
<div class="wrapper fadeInDown">
            <div class="formContent"> 
              <div class="fadeIn first">
              ${icono_contact}
              </div> 
              <form >
                <input type="text" id="Nombres" class="fadeIn second" name="Nombres" placeholder=${placeholders[0]} required>
                <input type="text" id="Apellidos" class="fadeIn second" name="Apellidos" placeholder=${placeholders[1]} required>
                <input type="text" id="Correo" class="fadeIn second" name="Email" placeholder=${placeholders[2]} required> <br> 
                <textarea name="comentarios" id="" cols="40" rows="10" placeholder=${placeholders[3]} required></textarea> 
                <input type="submit" class="fadeIn fourth" value=${boton_contact}>
              </form> 
            </div>
          </div>
` ;
