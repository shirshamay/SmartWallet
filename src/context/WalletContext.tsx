import { createContext, useEffect, useState } from "react";
import type { Transaction, walletContextType, walletProviderProps } from "../types/type";
import { mockTransactions } from "../data/mockTransactions";

export let WalletContext = createContext<walletContextType | undefined>(undefined)
export let WalletProvider = ({ children }: walletProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    let saved = localStorage.getItem('transactionNew')
    if (saved) return JSON.parse(saved)
    return mockTransactions;
  })
  
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  let addTransaction = (Transaction: Transaction) => {
    let transactionList = [Transaction, ...transactions];
    setTransactions(transactionList);
  };
  let deleteTransaction = (id: string) => {
    let transactionList = transactions.filter((trans) => trans.id !== id); // save all the transactions, except the one that equal to that id = delete
    setTransactions(transactionList);
  };
  useEffect(() => {
    localStorage.setItem("transactionNew", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <WalletContext.Provider
      value={{ transaction: sortedTransactions, addTransaction, deleteTransaction }}
    >
      {children}
    </WalletContext.Provider>
  );
}; 