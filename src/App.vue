<template>
  <div class="container">
    
    <div class="row">
      <div class="col-xs-12">
        
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
body {
  padding-top: 30px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-in-out forwards;
  
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 200ms ease-in-out forwards;

}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
     opacity: 0;
  }
  to {
    transform: translateY(0);
     opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
