import type { Transactions } from "../types/type";

export function calcLastTransactions(transactions: Transactions[]) {
    let newTransaction = [...transactions]
    newTransaction.sort((a, b) => {
        let fixDate1 = a.date.split('-')
        let fixDate2 = b.date.split('-')
        let date1 = new Date(Number(fixDate1[2]), Number(fixDate1[1]) - 1, Number(fixDate1[0])) // months begins from 0-11 = 0 is January
        let date2 = new Date(Number(fixDate2[2]), Number(fixDate2[1]) - 1, Number(fixDate2[0]))
        return Number(date2) - Number(date1)
    })
    return newTransaction.slice(0,3)
}
