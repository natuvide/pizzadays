console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // update_pizza.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"",
        imagen:"",
        ingredientes:0,
        precio:0,
        id_antes:0,
        nombre_antes:"",
        precio_antes:"",
        ingredientes_antes:"",
        imagen_antes:"",
        url:'https://natuvide.pythonanywhere.com/pizzas/'+id,
       }  
    },
    
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.imagen=data.imagen
                    this.ingredientes=data.ingredientes
                    this.precio=data.precio  
                    
                    this.id_antes=data.id
                    this.nombre_antes = data.nombre;
                    this.imagen_antes=data.imagen
                    this.ingredientes_antes=data.ingredientes
                    this.precio_antes=data.precio                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            console.log('"""""""""""""""""""""""');
            console.log(this.imagen);
            let pizza = {
                
                nombre:this.nombre,
                precio: this.precio,
                ingredientes: this.ingredientes,
                imagen: this.imagen,

            }
            console.log(this.imagen);
            console.log('"""""""""""""""""""""""');


            var options = {
                body: JSON.stringify(pizza),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./list_pizza.html"; // navega a pizzas.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
