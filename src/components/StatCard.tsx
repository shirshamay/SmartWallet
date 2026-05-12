import type { StatCardProps } from "../types/type";

const StatCard = ({ variant, trend, title, amount, icon }: StatCardProps) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`
        shadow-md border rounded-xl p-3 md:p-4 flex flex-col justify-between
        w-full min-h-28 md:h-32 transition-all
        ${isPrimary ? "bg-transparent border-blue-400" : "bg-white border-gray-200"}
      `}
    >
      <div className="flex justify-between items-start">
        <h2 className="font-poppins font-bold text-gray-800 text-sm md:text-base leading-tight">
          {title}
        </h2>
        <div
          className={
            isPrimary
              ? "text-blue-600"
              : trend === "positive"
                ? "text-green-800"
                : "text-red-500"
          }
        >
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        {isPrimary && (
          <span className="text-xs font-medium text-green-800 mt-1">
            <span className="sr-only">Trend: positive</span>
            (+2.1%)
          </span>
        )}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium truncate">
          ₪{amount.toLocaleString()}
        </h3>
      </div>
    </div>
  );
};
export default StatCard;