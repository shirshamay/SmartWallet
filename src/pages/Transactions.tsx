import { mockTransactions } from "../data/mockTransactions";
import { categoryIcons } from "../utilities/categoryIcons";
const Transactions = () => {
  return (
    <div className="p-4 m-5 w-full h-full md:p-6 bg-white shadow-md border border-gray-200 rounded-xl font-medium overflow-scroll">
      <div>
        {/* here to add the filter + editing + adding + deleting button */}
      </div>
      <div className="grid grid-cols-4 gap-1 sm:gap-4 w-full bg-gray-200 shadow-md border-b border-gray-300 rounded-md h-10 p-1 sm:p-2 items-center">
        <p>Date</p>
        <p>Description</p>
        <p>Category</p>
        <p>Amount</p>
      </div>
      {mockTransactions.map((trans, index) => (
        <div
          key={index}
          className="grid grid-cols-4 justify-items-stretch p-2 border-b border-gray-300"
        >
          <p>{trans.date}</p>
          <p>{trans.description}</p>
          <div className="flex items-center">
            {categoryIcons[trans.category]}
            {trans.category}
          </div>
          <p
            className={`${trans.type === "expense" ? "text-red-500" : "text-black"}`}
          >
            {trans.type === "expense" ? "-" : ""}
            {trans.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
