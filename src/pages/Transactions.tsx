import { mockTransactions } from "../data/mockTransactions";
import { categoryIcons } from "../utilities/categoryIcons";
const Transactions = () => {
  return (
    <div className="p-4 m-3 w-9% h-full md:p-5 bg-white shadow-md border border-gray-200 rounded-xl font-medium overflow-y-scroll">
      <div>
        {/* here to add the filter + editing + adding + deleting button */}
      </div>
      <div className="hidden md:grid grid-cols-3 md:grid-cols-4 sm:gap-2 md:gap-4 w-full bg-gray-200 shadow-md border-b border-gray-300 rounded-md h-10 p-1 sm:p-2 text-md items-center">
        <p>Date</p>
        <p>Description</p>
        <p>Category</p>
        <p>Amount</p>
      </div>
      {mockTransactions.map((trans, index) => (
        <div
          key={index}
          className="md:grid md:grid-cols-4 flex flex-col gap-4 p-1 sm:p-2 border-b border-gray-300 text-md "
        >
          <div className="flex justify-between md:block">
            <span className="text-lg text-gray-400 md:hidden">Date:</span>
            <p>{trans.date}</p>
          </div>
          <div className="flex justify-between md:block">
            <span className="text-lg text-gray-400 md:hidden">Description::</span>

            <p className="pr-2">{trans.description}</p>
          </div>
          <div className="flex md:items-center justify-between">
            <span className="text-lg text-gray-400 md:hidden">Category:</span>
            <div className="flex">
            {categoryIcons[trans.category]}
            {trans.category} 
        </div>
          </div>
                    <div className="flex justify-between md:block">
            <span className="text-lg text-gray-400 md:hidden">Amount:</span>

          <p
            className={`font-bold md:text-left text-right whitespace-nowrap ${trans.type === "expense" ? "text-red-500" : "text-black"}`}
          >
            {trans.type === "expense" ? "-" : ""}
            {trans.amount}
          </p>
          </div>
          </div>
      ))}
    </div>
  );
};

export default Transactions;
