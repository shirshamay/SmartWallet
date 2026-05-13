import { useEffect, useState } from "react";
import { getMarketData } from "../services/marketService";
import CryptoCard from "../components/CryptoCard";
import type { CoinData } from "../types/type";


const Investments = () => {
    const [loading, setLoading] = useState(false)
    const [coins, setCoins] = useState([])

    useEffect(() => {
        let fetchData = async () => {
                try {
                setLoading(true)
                let data = await getMarketData()
                setCoins(data)
                setLoading(false)
            }
            catch {
                    console.log('There is error')
                    setLoading(false)
                    throw Error
            }
        }
        fetchData()
    }, [])
    if (loading) return <div className="p-5 text-amber-700">Loading Prices...</div>;

    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Crypto Investments
        </h2>
        <div className="flex flex-wrap gap-4">
                {coins.map((coin: CoinData) => (
                    <CryptoCard
                        key={coin.id}
                        coin={coin}
                    />
          ))}
        </div>
      </div>
    );
}
 
export default Investments;