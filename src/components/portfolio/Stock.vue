<template>
    <div class="col-md-6 col-lg-4">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{ stock.name }}
            <small
              >(Price : {{ stock.price }} | Qunatity :
              {{ stock.quantity }})</small
            >
          </h3>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-7">
              <div class="pull-left">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Qunatity"
                  v-model="quantity"
                  :class="{ danger: insufficientStocks }"
                />
              </div>
            </div>
            <div class="col-xs-5">
              <div class="pull-right">
                <button
                  class="btn btn-info"
                  @click="sellStock"
                  :disabled="
                    insufficientStocks ||
                    quantity <= 0 ||
                    !Number.isInteger(Number(quantity))
                  "
                >
                  {{ insufficientStocks ? "not enough Stocks" : "Sell" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["stock"],
    data() {
      return {
        quantity: 0,
      };
    },
    methods: {
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        console.log(order);
        this.$store.dispatch("sellStocks", order);
        this.quantity = 0;
      },
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientStocks() {
        return this.quantity > this.stock.quantity;
      },
    },
  };
  </script>
  
  <style scoped>
  .danger {
    border: 1px solid red;
  }
  </style>
  