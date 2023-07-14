const { createApp } = Vue

    createApp({
    data() {
      return {
        url:"https://pizzadays.natuvide.duckdns.org/pizzas",
        pizzas: [],
        
      }
    },
    methods:{
        fetchData(origen){
          console.log("Inicia el fetch")
          console.log(origen)
            fetch(origen)
            .then( response => {
              console.log("REsponse done")
              return response.json();
            })
            .then( traerPizzas => {
              console.log("Inicia traerPizzas")
              this.pizzas=traerPizzas;
              console.log(this.pizzas);
              console.log("Finaliza traerPizzas")

            })
            console.log("Finaliza el fetch");
 
        }

    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')