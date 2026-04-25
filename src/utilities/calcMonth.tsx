import type { Transactions } from "../types/type";
import type { result } from "../types/type";
export function calcMonth(transactions: Transactions[]) {
    let result: result  = {}
    let months: Record<string,string> = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
    }
    for (let data of transactions) {
        let monthNumber: string = data.date.slice(3, 5) // now I got the month
        let monthName: string = months[monthNumber]
        if (!result[monthName]) { // if in result object it doesnt have the specific month
            result[monthName] = {
                income: 0,
                expense: 0,
            }
        }
        if (data.type === 'expense') {
            result[monthName].expense += data.amount
        } else {
            result[monthName].income += data.amount
        }
    }
    let convertToArr = Object.keys(result).map((keys) => ({
        month: keys,
        income: result[keys].income,
        expense: result[keys].expense,
    }))
    return convertToArr;
}