const { createApp } = Vue
  createApp({
    data() {
      return {
        pizzas:[],
        url:'https://pizzadays.natuvide.duckdns.org/pizzas',   
        error:false,
        cargando:true,
        /*atributos para el guardado  de los valores del formulario */
        id:0,
        nombre:"", 
        imagen:"",
        ingredientes:"",
        precio:"",
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.pizzas = data;
                    console.log(this.pizzas);
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let pizza = {
                nombre:this.nombre,
                precio: this.precio,
                ingredientes: this.ingredientes,
                imagen:this.imagen
            }
            var options = {
                body:JSON.stringify(pizza),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./list_pizza.html";  // recarga pizzas.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar: ", err)  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
