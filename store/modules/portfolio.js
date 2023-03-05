const state = {
  funds: 10000,
  stocks: [],
};

const getters = {
  portfolioStocks: (state , getters) => {
    return state.stocks.map( stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id : stock.id,
        quantity : stock.quantity,
        name : stock.name,
        price : record.price

      }
    });
  },
  funds: (state) => {
      return state.funds;
  }
};

const mutations = {
  'BUY_STOCKS'(state, { stockId, stockName ,stockPrice, quantity }) {
    //check if the record exists before
    const record = state.stocks.find((element) => element.id == stockId);

    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        name: stockName,
        price : stockPrice,
        quantity: quantity,
      });
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCKS'(state , { stockId, stockPrice, quantity }) {
    //check if the record exists before
    const record = state.stocks.find((element) => element.id == stockId);

    if(record.quantity > quantity){
        record.quantity -= quantity;
    }else{
        state.stocks.splice(state.stocks.indexOf(record) , 1);
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTOLIO'(state , portfolio){
    state.funds = portfolio.funds;
    state.stocks = portfolio.portfolioStocks ? portfolio.portfolioStocks : [];
}
};

const actions = {
  sellStocks: (context , order) => {
    context.commit("SELL_STOCKS", order);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
