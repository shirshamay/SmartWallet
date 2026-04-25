import type { LastTransactionsProps } from "../types/type";
import { Utensils, BriefcaseBusiness } from "lucide-react";

const LastTransactions: React.FC<LastTransactionsProps> = ({ lastTrans }) => {
    let categoryIcons: Record<string, React.ReactNode> = {
      Restaurant: (
        <div className="flex items-center justify-center w-7 h-7 bg-red-200 rounded-full mr-3 border border-gray-300">
          <Utensils className=" w-5 h-5 rounded-b-md" />
        </div>
      ),
      Work: (
        <div className="flex items-center justify-center w-7 h-7 bg-blue-200 rounded-full mr-3 border border-gray-300">
          <BriefcaseBusiness className=" w-5 h-5 rounded-md" />
        </div>
      ),
    };
  return (
    <div className="p-4 m-5 h-56 w-305 bg-white shadow-md border border-gray-200 rounded-xl font-medium">
      <div>
        <h2 className="font-bold pb-1">Transaction History</h2>
      </div>
      <div>
        <div className="grid grid-cols-4 justify-items-stretch w-full bg-gray-200 shadow-md border-b border-gray-300 rounded-md h-10 p-2">
          <p>Date</p>
          <p>Description</p>
          <p>Category</p>
          <p>Amount</p>
        </div>
        {lastTrans.map((trans, index) => (
          <div
            key={index}
            className="grid grid-cols-4 justify-items-stretch p-2 border-b border-gray-300"
          >
            <p>{trans.date}</p>
            <p>{trans.description}</p>
            <p className="flex items-center">
              {categoryIcons[trans.category]}
              {trans.category}
            </p>
            <p
              className={`${trans.type === "expense" ? "text-red-500" : "text-black"}`}
            >
              {trans.type === "expense" ? "-" : ""}
              {trans.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastTransactions;
