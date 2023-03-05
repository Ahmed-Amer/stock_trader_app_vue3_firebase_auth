<template>
    <div class="col-md-6 col-lg-4">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{ stock.name }} <small>Price : {{ stock.price }}</small>
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
                  :class="{ danger: insufficientFunds }"
                />
              </div>
            </div>
            <div class="col-xs-5">
              <div class="pull-right">
                <button
                  class="btn btn-success"
                  @click="buyStock"
                  :disabled="
                    quantity <= 0 ||
                    quantity * stock.price > funds ||
                    !Number.isInteger(Number(quantity)) 
                  "
                >
                {{ insufficientFunds ? "not enough Funds" : "Sell" }}
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
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockName: this.stock.name,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        console.log(order);
        this.$store.dispatch("buyStocks", order);
        this.quantity = 0;
      },
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      },
    },
  };
  </script>
  
  <style scoped>
  .danger {
    border: 1px solid red;
  }
  </style>
  