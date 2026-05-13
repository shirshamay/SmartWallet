import axios from "axios"

const BASE_URL = "https://api.coingecko.com/api/v3";

export let getMarketData = async () => {
    try {
        let response = await axios.get(`${BASE_URL}/coins/markets`)
        console.log("API Data:", response.data);
    } catch {
        console.log('There has been an error with displaying your data')
        throw Error
    };
}