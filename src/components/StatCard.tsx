import type { StatCardProps } from "../types/type";

const StatCard = ({ variant, trend, title, amount, icon }: StatCardProps) => {
    let cardPrimaryStyle: string = ""
    if (
      variant === "primary") {
        cardPrimaryStyle = "bg-transparent border-blue-400";
      return (
        <div
          className={`shadow-md border rounded-xl p-4 w-90 h-28 flex flex-col ${cardPrimaryStyle}`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-poppins font-bold">{title}</h3>
            <button className="">{icon}</button>
          </div>
          <h2 className="text-4xl font-medium">{"₪" + amount}</h2>
          <div className="text-sm font-medium text-green-500">
            <span>(+2.1%)</span>
          </div>
        </div>
      );
    } else
      return (
        <div className="shadow-md border border-gray-200 rounded-xl p-4 w-70 h-28 flex flex-col bg-white">
          <h3 className="font-poppins font-bold">{title}</h3>
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-4xl font-medium">{"₪" + amount}</h2>
            <span
              className={`${trend === "positive" ? "text-green-500" : "text-red-500"}`}
            >
              {icon}
            </span>
          </div>
        </div>
      );
}
 
export default StatCard;