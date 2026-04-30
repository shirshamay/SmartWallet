import type { LastTransactionsProps } from "../types/type";
import { categoryIcons } from "../utilities/categoryIcons";

const LastTransactions: React.FC<LastTransactionsProps> = ({ lastTrans }) => {
  return (
    <div className="p-4 mt-6 w-full max-w-full overflow-hidden bg-white shadow-md border border-gray-200 rounded-xl font-medium">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold pb-1">Transaction History</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="hidden md:grid grid-cols-3 md:grid-cols-4 gap-2 w-full bg-gray-200 shadow-md border-b border-gray-300 rounded-md h-10 p-2">
          <p>Date</p>
          <p>Description</p>
          <p>Category</p>
          <p>Amount</p>
        </div>
        <div className="flex flex-col">
          {lastTrans.map((trans, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-4 border-b border-gray-100 
                md:grid md:grid-cols-4 md:gap-4 md:items-center md:p-3
                hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between md:block">
                <span className="text-xs text-gray-400 md:hidden">Date:</span>
                <p className="text-sm text-gray-600">{trans.date}</p>
              </div>
              <div className="flex justify-between md:block">
                <span className="text-xs text-gray-400 md:hidden">
                  Description:
                </span>
                <p className="text-sm font-bold md:font-medium text-gray-900">
                  {trans.description}
                </p>
              </div>

              <div className="flex justify-between items-center md:flex md:justify-start md:gap-2">
                <span className="text-xs text-gray-400 md:hidden">
                  Category:
                </span>
                <div className="flex items-center gap-2">
                  {categoryIcons[trans.category]}
                  <span className="text-sm">{trans.category}</span>
                </div>
              </div>

              <div className="flex justify-between md:block border-t border-gray-50 pt-2 md:border-none md:pt-0">
                <span className="text-xs text-gray-400 md:hidden">Amount:</span>
                <p
                  className={`text-sm font-bold ${
                    trans.type === "expense" ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {trans.type === "expense" ? "-" : "+"}₪
                  {trans.amount.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastTransactions;
