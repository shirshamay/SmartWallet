import StatCard from "../components/StatCard";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockTransactions } from "../data/mockTransactions";
import type { Transactions } from "../types/type";
import AnalyticsCard from "../components/AnalyticsCard";
import { calcMonth } from "../utilities/calcMonth";
import LastTransactions from "../components/LastTransactions";
import { calcLastTransactions } from "../utilities/calcLastTransactions";

export const Dashboard = () => {
  // create filter on each expense transaction, take the sum of all expenses and add the current expense to it every time the user add a new expense.
  const allTransactions = (transactions: Transactions[], type: 'expense' | 'income'): number => {
    return transactions.filter((transaction) => transaction.type === type).reduce((accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0)
  }
  let totalIncomes = allTransactions(mockTransactions, 'income')
  let totalExpenses = allTransactions(mockTransactions, "expense");
  let balance: number = totalIncomes - totalExpenses; // what's left from the income after the expenses 
  let monthlyData = calcMonth(mockTransactions)
  let lastTrans = calcLastTransactions(mockTransactions)
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
        <AnalyticsCard
          incomes={totalIncomes}
          expenses={totalExpenses}
          monthlyData={monthlyData}
        />
      </div>
      <LastTransactions
      lastTrans={lastTrans}
      />
      </>
  );
};

export default Dashboard;
