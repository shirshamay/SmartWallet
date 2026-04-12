import StatCard from "./StatCard";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockTransactions } from "../data/mockTransactions";

const Dashboard = () => {
  // create filter on each expense transaction, take the sum of all expenses and add the current expense to it every time the user add a new expense.
  let totalExpenses: number = mockTransactions.filter((transaction) => transaction.type === "expense").reduce((accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0)
  let totalIncomes: number = mockTransactions.filter((transaction) => transaction.type === 'income').reduce((accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0)
  let balance: number = totalIncomes - totalExpenses; // what's left from the income after the expenses 
  return (
    <>
    <div className="flex flex-row flex-wrap p-6 gap-5">
      <StatCard
        variant="primary"
        title="Total Balance:"
        amount={34500.20}
        icon={<DollarSign />}
      />
      <StatCard
        variant="default"
        trend='positive'
        title="Total Monthly Incomes"
        amount={34500.0}
        icon={<ArrowUpRight />}
      />
      <StatCard
        variant="default"
        trend='negative'
        title="Total Monthly Expenses"
        amount={26703.0}
        icon={<ArrowDownRight />}
      />
      </div>
      <div className="flex gap-5 pl-6">
        <StatCard variant="default" trend="negative" icon={<ArrowDownRight />} title="Expenses" amount={totalExpenses} />
        <StatCard variant="default" trend="positive" icon={<ArrowUpRight />}  title="Incomes" amount={totalIncomes} />
        <StatCard  variant="default" trend="positive" icon={<ArrowUpRight />} title="Balance" amount={balance} />
      </div>
      </>
  );
};

export default Dashboard;
