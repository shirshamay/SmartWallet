import StatCard from "../components/StatCard";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { calcAllTransactions } from "../utilities/calcAllTransactions";
import AnalyticsCard from "../components/AnalyticsCard";
import { calcMonth } from "../utilities/calcMonth";
import LastTransactions from "../components/LastTransactions";
import { calcLastTransactions } from "../utilities/calcLastTransactions";
import { useContext } from "react";
import { WalletContext } from "../context/WalletContext"; 

export const Dashboard = () => {
  const context = useContext(WalletContext);
  if (!context) return null;
  const { transaction } = context;
  let totalIncomes = calcAllTransactions(transaction, 'income')
  let totalExpenses = calcAllTransactions(transaction, "expense");
  let balance: number = totalIncomes - totalExpenses; // what's left from the income after the expenses 
  let monthlyData = calcMonth(transaction)
  let lastTrans = calcLastTransactions(transaction)
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 p-3 md:p-6">
      <div className="flex flex-col lg:flex-row gap-5">
        <StatCard
          variant="primary"
          title="Total Balance:"
          amount={balance}
          icon={<DollarSign />}
        />
        <StatCard
          variant="default"
          trend="positive"
          title="Total Monthly Incomes"
          amount={totalIncomes}
          icon={<ArrowUpRight />}
        />
        <StatCard
          variant="default"
          trend="negative"
          title="Total Monthly Expenses"
          amount={totalExpenses}
          icon={<ArrowDownRight />}
        />
      </div>
      <div className="w-full">
        <AnalyticsCard
          incomes={totalIncomes}
          expenses={totalExpenses}
          monthlyData={monthlyData}
        />
      </div>
      <div className="w-full">
        <LastTransactions lastTrans={lastTrans} />
      </div>
    </div>
  );
};

export default Dashboard;
