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
    <div className="p-4 w-full bg-white shadow-md border border-gray-200 rounded-xl flex flex-col gap-6">
      <div>
        <h2 className="font-bold text-lg">Visual Analytics</h2>
      </div>
      <div className="flex flex-col xl:flex-row gap-8">
        {/* גרף 1: Portfolio Value */}
        <div className="w-full xl:w-1/2">
          <h2 className="pb-4 font-medium text-sm text-gray-600">
            Portfolio Value (6 months)
          </h2>
          <div className="h-75 md:h-100 w-full sm:h-94">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={IncomesAndExpenses}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" barSize={60} radius={[4, 4, 0, 0]}>
                  {IncomesAndExpenses.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* גרף 2: Incomes vs. Expenses */}
        <div className="w-full xl:w-1/2">
          <h2 className="pb-4 font-medium text-sm text-gray-600">
            Incomes vs. Expenses (last 6 months)
          </h2>
          <div className="h-75 md:h-100 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ left: -20 }}>
                <XAxis
                  dataKey="month"
                  minTickGap={10}
                  tick={{ fontSize: 12 }}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="income" fill="#60a5fa" radius={[2, 2, 0, 0]} />
                <Bar dataKey="expense" fill="#d3d3d3" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
