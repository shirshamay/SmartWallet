import type { AnalyticsProps } from "../types/type";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

const AnalyticsCard: React.FC<AnalyticsProps> = ({
  incomes,
  expenses,
  balance,
  monthlyData,
}) => {
  let IncomesAndExpenses = [
    {
      name: "income",
      value: incomes, // it knows how to read incomes because we passed it as prop from dashboard (dont need {incomes})
      color: "#60a5fa",
    },
    {
      name: "expense",
      value: expenses,
      color: "#d3d3d3",
    },
  ];
  return (
    <div className="p-4 w-240 h-80 bg-white shadow-md border border-gray-200 rounded-xl flex flex-row justify-evenly">
      <div>
        <h2 className="font-bold pl-2">Visual Analytics</h2>
      </div>
      <div className="h-64 w-180 pl-2">
        <h2 className="pb-2 font-medium">Portfolio Value (6 months)</h2>
        <ResponsiveContainer width="90%" height="100%">
          <BarChart width={80} height={50} data={IncomesAndExpenses}>
            <XAxis dataKey="name" /> <YAxis />
            <Bar dataKey="value" barSize={70} radius={2}>
              {IncomesAndExpenses.map((entry) => (
                <Cell key={`${entry.name}`} fill={entry.color} /> // entry its the object itself in each iteration
              ))}
            </Bar>
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-64 w-180 pl-2">
        <h2 className="pb-2 font-medium">Incomes vs. Expenses (last 6 months)</h2>
        <ResponsiveContainer width="90%" height="100%">
          <BarChart width={80} height={50} data={monthlyData}>
            <XAxis dataKey="month" />
            <Bar dataKey="income" fill="#d3d3d3" radius={2} />
            <Bar dataKey="expense" fill="#60a5fa" radius={2} />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCard;
