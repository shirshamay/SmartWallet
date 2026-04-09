import StatCard from "./StatCard";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
