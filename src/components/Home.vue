<template>
    <div>
       <app-header></app-header>
       
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day</h6>
        <hr>
        <p>Your Funds : {{ funds | currency}}</p>
        <p class="text-center" style="font-size: x-small;">Welcome : {{ this.email }}</p>
    </div>
</template>

<script>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
    data(){
        return {
            email : ""
        }
    },
    computed: {
        funds(){
        return this.$store.getters.funds;
    }
    },
    created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.email = user.email;
      } 
    });
  }
};
</script>