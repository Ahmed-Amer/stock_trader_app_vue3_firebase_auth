<template>
    <div class="row">
        <app-header></app-header>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        
        <div class="col-md-6 col-lg-4" v-if="stocks.length == 0">
            <p>No Stcoks Available</p>
        </div>
    </div>
</template>
<script>
import Stock from './Stock.vue';
// import Header from "../Header.vue";

export default {
    computed : {
        stocks(){
            return this.$store.getters.portfolioStocks;
        }
    },
    components: {
        appStock : Stock,

    }
};
</script>