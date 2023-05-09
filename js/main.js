let nav_bar = `   <nav>

<div class="contenedor">

<a href="./index.html">
<img class="logo1" src="./img/Logo (1) (1).png" alt=""> 
</a>   
</div>


<ul>

    <li><a href="carta.html">Carta</a></li>
    <li><a href="reservas.html">Reservas</a></li>
    <li><a href="ubicacion.html">Ubicación</a></li>
</ul>

</nav>
`
let footer= `<footer>
<p>Podes seguirnos en nuestras redes!</p>

<ul>
<li class="icon_margin">
<a 

 href="https://www.facebook.com/pizzadays1"  target="_blank" ><i class="fa-brands fa-facebook fa-3x"style="color: #1a6eff;"></i>

</a>
</li>

<li class="icon_margin">
<a
 href="https://www.instagram.com/pizzadays1/" target="_blank" ><i class="fa-brands fa-instagram fa-3x" style="color: #d36fb8;"></i>

</a>
</li>

<li class="icon_margin">
<a 
href="https://api.whatsapp.com/send?phone=5493496561948" target="_blank" ><i class="fa-brands fa-whatsapp fa-3x" style="color: #21ba45;"></i>

</a>
</li>

<ul>

    </footer>
`
/* <ul>   ESTE FOOTER ES EL QUE HIZO NICOLE, LO DEJO COMO COMENTARIO. LO CAMBIE PORQUE LAS IMAGENES 
SI BIEN LAS BAJÓ DE FLATICON, NO DEJAN DE SER SIMPLES IMAGENES, PORQUE NO ESTAN LINKEADAS A NADA

        <p>SEGUINOS EN NUESTRAS REDES!</p>
        <li> <a class="icon" href="https://api.whatsapp.com/send?phone=11111111" target="_blank">
                <img width="30" src="./img/whatsapp (6).png" alt="whatsapp">
            </a>
        </li>
        <li><a class="icon" href="https://www.facebook.com/pizzadays1" target="_blank">
                <img width="30" src="./img/facebook.png" alt="facebook">
            </a>
        </li>
        <li> <a class="icon" href="https://www.instagram.com/pizzadays1/" target="_blank">
                <img width="30" src="./img/instagram (1).png" alt="whatsapp">
            </a>
        </li>
    </ul> */

// en la barra de navegacion el logo dirige al index / que sería el inicio

document.getElementById("header").innerHTML = nav_bar;
document.getElementById("footer").innerHTML = footer;