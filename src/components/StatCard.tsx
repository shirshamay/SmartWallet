import type { StatCardProps } from "../types/type";

const StatCard = ({ variant, trend, title, amount, icon }: StatCardProps) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`
        shadow-md border rounded-xl p-3 md:p-4 flex flex-col justify-between
        w-full min-h-27.5 md:h-32 transition-all
        ${isPrimary ? "bg-transparent border-blue-400" : "bg-white border-gray-200"}
      `}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-poppins font-bold text-gray-800 text-sm md:text-base leading-tight">
          {title}
        </h3>
        <button
          className={
            isPrimary
              ? "text-blue-500"
              : trend === "positive"
                ? "text-green-500"
                : "text-red-500"
          }
        >
          {icon}
        </button>
      </div>
      <div className="flex flex-col">
        {isPrimary && (
          <span className="text-xs font-medium text-green-500 mt-1">
            (+2.1%)
          </span>
        )}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium truncate">
          ₪{amount.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};
export default StatCard;