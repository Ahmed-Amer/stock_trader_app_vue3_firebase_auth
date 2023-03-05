import stocks from '../../data/stocks';

const state = {
    stocks : []
};

const getters = {
    stocks : state => {
        return state.stocks;
    }
};

const mutations = {
    'SET_STOCKS'(state , stocks){
        state.stocks = stocks;
    },
    'RAN_STOCKS'(state){
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1+Math.random()-0.5));
        });
    }
}

const actions = {
    initStocks: (context)=>{
        context.commit('SET_STOCKS' , stocks);
    },
    buyStocks: (context , order) => {
      context.commit('BUY_STOCKS' , order);
    },
    randomizeStocks : (context)=>{
        context.commit('RAN_STOCKS');
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}
