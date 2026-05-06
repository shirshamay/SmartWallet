import { useState, useContext } from "react";
import { WalletContext } from "../context/WalletContext";

export const AddTransactionForm = () => {
  const context = useContext(WalletContext);
  if (!context) return null;
  const { addTransaction } = context;

  // create props for use state
  let [description, setDescription] = useState("");
  let [amount, setAmount] = useState<number>(0);
  let [category, setCategory] = useState("");
  let [type, setType] = useState<"income" | "expense">("income");

  let handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTransaction({
      id: crypto.randomUUID(),
      date: new Date().toISOString().split("T")[0],
      description: description,
      category: category,
      amount: amount,
      type: type,
    });
    // reset the values
    setAmount(0);
    setCategory("");
    setDescription("");
    setType("income");
  };
  return (
    <div className="md:flex">
      <form onSubmit={handleSubmit}>
        <label>
          description:
          <input
            type="description"
            value={description}
            placeholder=" description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          category:
          <input
            type="category"
            value={category}
            placeholder=" category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label>
          amount:
          <input
            type="amount"
            value={amount}
            placeholder=" amount"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <label>
          type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "income" | "expense")}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
      <button
        type="submit"
        className="bg-blue-400 text-white p-1.5 rounded-2xl ml-3 hover:bg-gray-100 text-sm transition-colors"
      >
        Add Transaction
      </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
