<template>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>
  
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" tag="li" activeClass="active"
              ><a>Portfolio</a></router-link
            >
            <router-link to="/stocks" tag="li" activeClass="active"
              ><a>Stocks</a></router-link
            >
            
          </ul>
          
          <strong class="navbar-text navbar-right"
          >Funds : {{ funds | currency }}</strong
        >
  
          <ul class="nav navbar-nav navbar-right">
            
            <li><a href="#" @click.prevent="endDay">End Day</a></li>
            <li
              class="dropdown"
              :class="{ open: isDropDownOpen }"
              @click="isDropDownOpen = !isDropDownOpen"
            >
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Save & Load <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="saveData">Save Data</a></li>
                <li><a href="#" @click="loadData">Load Data</a></li>
              </ul>
            </li>
            <li v-if="isLoggedIn"><a href="" @click.prevent="logout" class="navbar-right">Logout</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </template>
  
  <script>
  import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
  export default {
    data() {
      return {
        isDropDownOpen: false,
        isLoggedIn: false,
      };
    },
    created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } 
    });
  },
    methods: {
      logout(){
        const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push('/login');
        //this.$router.go({ path: this.$router.path });
      })
      },
      endDay() {
        this.$store.dispatch("randomizeStocks");
      },
      saveData() {
        console.log('save adata');
        const data = {
          funds: this.$store.getters.funds,
          portfolioStocks: this.$store.getters.portfolioStocks,
          stocks: this.$store.getters.stocks,
        };
        // POST
        this.$http.put(
          "https://vue-stock-trader-76f45-default-rtdb.firebaseio.com/data.json",
          data
        );
      },
      loadData() {
          this.$store.dispatch("loadDataAction");
      },
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
  };
  </script>
  