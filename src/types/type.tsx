import React from "react";
export interface SideBarElement {
  label: string;
  icon: React.ReactNode;
  path: string;
}
export interface StatCardProps {
  trend?: string;
  variant: string;
  title: string;
  amount: number;
  icon: React.ReactNode;
}
export interface Transactions {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}
export interface resultData {
  // what is inside result object i created in calcMonth
  month?: string;
  income: number;
  expense: number;
}
export interface result {
  [key: string]: resultData; // tell its object and containes the resultData properties.
}
export interface MonthlyData {
  month: string;
  income: number;
  expense: number;
}

export interface AnalyticsProps {
  incomes: number;
  expenses: number;
  monthlyData: MonthlyData[];
}

export interface LastTransactionsProps {
  lastTrans: Transactions[];
}
export interface walletContextType {
  transaction: Transactions[];
  addTransaction: (transaction: Transactions) => void;
  deleteTransaction: (id: string) => void;
}
export interface walletProviderProps {
  children: React.ReactNode,
}