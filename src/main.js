import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import {routes} from './routes'
import { store } from '../store/store'
import Header from './components/Header.vue'
import { getAuth , onAuthStateChanged } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChoZT8U_PTHmC6xLfa3AVeScuLdQRp8mk",
  authDomain: "vue-stock-trader-76f45.firebaseapp.com",
  databaseURL: "https://vue-stock-trader-76f45-default-rtdb.firebaseio.com",
  projectId: "vue-stock-trader-76f45",
  storageBucket: "vue-stock-trader-76f45.appspot.com",
  messagingSenderId: "392733794516",
  appId: "1:392733794516:web:7ba3e3dad93cd94b371b41",
  measurementId: "G-9L46T8TJQ5"
};

// Initialize Firebase
initializeApp(firebaseConfig);


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.filter('currency' , (value) => {
  return '$' + value.toLocaleString();
});



const router = new VueRouter({
  mode : 'history',
  routes : routes
});


//router filters

//Solution for reloading app lose auth
const getCurrentUser = () => {
  return new Promise((resolve , reject) => {
    const removeListener =  onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}



// Nav Guard for pages Auth
router.beforeEach(async(to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if logged user
    if (await getCurrentUser()) {
       // Proceed to route
       next();
    } else {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged user
    if (await getCurrentUser()) {
      // Go to dashboard
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});


Vue.component('app-header' , Header);

new Vue({
  render: (h) => h(App),
  router : router,
  store : store,
}).$mount('#app');
