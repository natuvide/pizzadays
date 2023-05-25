const { createApp } = Vue

createApp({
    data() {
      return {
       url:"./js/datos.json",
    
        pizzas: [],
      
      }
    },
    methods:{
        fetchData(origen){
            fetch(origen)
            .then( response => response.json())
            .then( traerPizzas => {
                console.log(traerPizzas.lista_pizzas),
                this.pizzas=traerPizzas.lista_pizzas
            })
 
        },

    },
    created() {
      
        this.fetchData(this.url)

    },
  }).mount('#app')

    //-------------------------------------------
  
    createApp({
    data() {
      return {
        url:"https://pizza-api.mirkingo.duckdns.org/",
        pizzas: [],
        
      }
    },
    methods:{
        fetchData(origen){
            fetch(origen)
            .then( response => response.json())
            .then( traerPizzas => {
                console.log(traerPizzas.pizzas),
                this.pizzas=traerPizzas.pizzas
            })
 
        },

    },
    created() {
        console.log(this.pizzas)
        this.fetchData(this.url)

    },
  }).mount('#app2')