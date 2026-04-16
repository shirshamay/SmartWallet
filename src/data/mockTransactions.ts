import type { Transactions } from "../types/type"

export let mockTransactions: Transactions[] = [
  {
    date: "03-02-2023",
    description: "Salary",
    category: "Work",
    amount: 3000,
    type: "income",
  },
  {
    date: "08-02-2023",
    description: "Rent",
    category: "Rent",
    amount: 2000,
    type: "expense",
  },
  {
    date: "02-02-2023",
    description: "Groceries",
    category: "Groceries",
    amount: 300,
    type: "expense",
  },
  {
    date: "02-02-2023",
    description: "Salary",
    category: "Work",
    amount: 500,
    type: "income",
  },
  {
    date: "02-02-2023",
    description: "Salary",
    category: "Work",
    amount: 400,
    type: "income",
  },
];