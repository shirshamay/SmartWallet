import type { Transaction } from "../types/type"

 export const calcAllTransactions = (transactions: Transaction[], type: 'expense' | 'income'): number => {
    return transactions.filter((transaction) => transaction.type === type).reduce((accumulator, currentTransaction) => accumulator + currentTransaction.amount, 0)
  }