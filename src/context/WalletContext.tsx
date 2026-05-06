import { createContext, useState } from "react";
import type { Transaction, walletContextType, walletProviderProps } from "../types/type";
import { mockTransactions } from "../data/mockTransactions";

export let WalletContext = createContext<walletContextType | undefined>(undefined)
export let WalletProvider = ({ children } : walletProviderProps) => {
    const [transactions, setTransactions] = useState(mockTransactions)

    let addTransaction = (Transaction: Transaction) => {
        let transactionList = [...transactions, Transaction]
        setTransactions(transactionList)
    }
    let deleteTransaction = (id: string) => {
        let transactionList = transactions.filter((trans) => trans.id !== id) // save all the transactions, except the one that equal to that id = delete
        setTransactions(transactionList)
    }
    return (
      <WalletContext.Provider
        value={{ transaction: transactions, addTransaction, deleteTransaction }}
      >
        {children}
      </WalletContext.Provider>
    );
} 