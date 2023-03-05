import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'


 export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/portfolio',
        component: Portfolio,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/stocks',
        component: Stocks,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },

]
