import type { CoinData } from "../types/type";

const CryptoCard = ({coin}: {coin: CoinData}) => {
    return (
      <div
        key={coin.id}
        className="transition-all duration-300 hover:scale-105 hover:shadow-xl p-4 w-72 rounded-lg shadow-md border border-blue-200"
      >
        <div className="flex items-center] gap-2 mb-2">
        <img src={coin.image} alt="coin image" className="w-9" />
        <p className="text-gray-800 text-sm uppercase font-bold">
          {coin.symbol}
        </p>
        </div>
        <p className="text-black text-2xl">
          ${coin.current_price.toLocaleString()}
        </p>
        <p
          className={
            coin.price_change_percentage_24h > 0
              ? "text-green-600"
              : "text-red-600"
          }
        >
          {coin.price_change_percentage_24h}%
        </p>
      </div>
    );
}
 
export default CryptoCard;