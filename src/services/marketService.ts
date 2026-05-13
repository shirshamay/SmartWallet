import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export let getMarketData = async () => {
  try {
    let response = await axios.get(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
    );
    console.log("API Data:", response.data);
    return response.data;
  } catch {
    console.log("There has been an error with displaying your data");
    throw Error;
  }
};
