let title_login="Login"; 
var icono_login=["<img src=img/id.png id=icon alt=User Icon />"];
var placeholders=["Usuario","Contraseña"];
let boton_login="INGRESAR";
let texto_contraseña="¿Has olvidado la contraseña?";


const ingreso = document.querySelector("#ingreso");
ingreso.innerHTML = `    
<h2 class="titulo">${title_login}</h2>                   
<div class="wrapper fadeInDown">
            <div class="formContent"> 
           
              <div class="fadeIn first">
              ${icono_login}
              </div>
           
              <form>
              <input type="text" id="login" class="fadeIn second" name="Usuario" placeholder=${placeholders[0]} required>
                <input type="text" id="password" class="fadeIn third" name="Contraseña" placeholder=${placeholders[1]} required>
                <input type="submit" class="fadeIn fourth" value=${boton_login}>
                </form>
           
                <div class="formFooter">
                  <a class="underlineHover" href="#">${texto_contraseña}</a>
                </div>
            
              </div>
            </div>
  ` ;