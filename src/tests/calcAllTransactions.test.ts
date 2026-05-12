import { describe, it, expect } from "vitest";
import { calcAllTransactions } from "../utilities/calcAllTransactions";
import type { Transaction } from "../types/type";

describe('calcAllTransactions logic', () => {
    it('should sum only incomes and ignore expenses', () => {
        // dont work with real data
        const mockTransactions: Transaction[] = [
            { id: '1', amount: 100, type: 'income', category: 'Salary', date: '2024-01-01', description: '' },
            { id: '2', amount: 50, type: 'expense', category: 'Food', date: '2024-01-02', description: '' },
            { id: '3', amount: 200, type: 'income', category: 'Bonus', date: '2024-01-03', description: '' },
        ];

        // check the income
        let result = calcAllTransactions(mockTransactions, 'income')
        expect(result).toBe(300)
        
    })
    it('should return 0 when there are no transactions', () => {
        const result = calcAllTransactions([], 'income');
        expect(result).toBe(0);
    })
}
)