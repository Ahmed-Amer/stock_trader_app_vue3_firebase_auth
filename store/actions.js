import Vue from "vue";

export const loadDataAction = (context) => {
  Vue.http
    .get("https://vue-stock-trader-76f45-default-rtdb.firebaseio.com/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data) {
        console.log(data);
        const stocks = data.stocks;
        const portfolioStocks = data.portfolioStocks; 
        const funds = data.funds;

        const portfolio = {
          portfolioStocks,
          funds,
        };
        context.commit("SET_STOCKS", stocks);
        context.commit("SET_PORTOLIO", portfolio);
      }
    });
};
