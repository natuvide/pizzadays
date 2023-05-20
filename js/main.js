let nav_bar = `   <nav>

<div class="contenedor">

<a href="index.html">
<img class="logo1" src="./img/logopizzadays.png" alt=""> 
</a>   
</div>


<ul>

    <li><a href="1-carta.html">Carta</a></li>
    <li><a href="2-reservas.html">Reservas</a></li>
    <li><a href="3-ubicacion.html">Ubicación</a></li>
</ul>

</nav>
`
let footer= ` <footer>
<p class="pfooter">Podes seguirnos en nuestras redes!</p>
<ul>

    <li class="icon_margin">
        <a href="https://www.facebook.com/pizzadays1" target="_blank"><i class="fa-brands fa-facebook fa-3x"
                style="color: #ffffff;"></i>

        </a>
    </li>

    <li class="icon_margin">
        <a href="https://www.instagram.com/pizzadays1/" target="_blank"><i class="fa-brands fa-instagram fa-3x"
                style="color: #ffffff;"></i>

        </a>
    </li>

    <li class="icon_margin">
        <a href="https://api.whatsapp.com/send?phone=5493496561948" target="_blank"><i
                class="fa-brands fa-whatsapp fa-3x" style="color: #ffffff;"></i>

        </a>
    </li>
</ul>

</footer>
`


document.getElementById("header").innerHTML = nav_bar;
document.getElementById("footer").innerHTML = footer;