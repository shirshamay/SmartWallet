import StatCard from "./StatCard";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockTransactions } from "../data/mockTransactions";
import type { Transactions } from "../types/type";
import AnalyticsCard from "./AnalyticsCard";
import { calcMonth } from "../utilities/calcMonth";

export const Dashboard = () => {
  // create filter on each expense transaction, take the sum of all expenses and add the current expense to it every time the user add a new expense.
  const allTransactions = (transactions: Transactions[], type: 'expense' | 'income'): number => {
    return transactions.filter((transaction) => transaction.type === type).reduce((accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0)
  }
  let totalIncomes = allTransactions(mockTransactions, 'income')
  let totalExpenses = allTransactions(mockTransactions, "expense");
  let balance: number = totalIncomes - totalExpenses; // what's left from the income after the expenses 
  let monthlyData = calcMonth(mockTransactions)
    // let IncomesAndExpenses = [
    //   {
    //     name: "income",
    //     value: totalIncomes, 
    //     color: "#60a5fa",
    //   },
    //   {
    //     name: "expense",
    //     value: totalExpenses,
    //     color: "#d3d3d3",
    //   },
    // ];
  return (
    <>
    <div className="flex flex-row flex-wrap p-6 gap-5">
      <StatCard
        variant="primary"
        title="Total Balance:"
        amount={balance}
        icon={<DollarSign />}
      />
      <StatCard
        variant="default"
        trend='positive'
        title="Total Monthly Incomes"
        amount={totalIncomes}
        icon={<ArrowUpRight />}
      />
      <StatCard
        variant="default"
        trend='negative'
        title="Total Monthly Expenses"
        amount={totalExpenses}
        icon={<ArrowDownRight />}
      />
      </div>
      <div className="flex gap-5 pl-6">
        {/* <StatCard variant="default" trend="negative" icon={<ArrowDownRight />} title="Expenses" amount={totalExpenses} />
        <StatCard variant="default" trend="positive" icon={<ArrowUpRight />}  title="Incomes" amount={totalIncomes} />
        <StatCard  variant="default" trend="positive" icon={<ArrowUpRight />} title="Balance" amount={balance} /> */
        }
        <AnalyticsCard
          incomes={totalIncomes}
          expenses={totalExpenses}
          balance={balance}
          monthlyData={monthlyData}
        />
      </div>
      </>
  );
};

export default Dashboard;
