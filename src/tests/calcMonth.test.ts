import { describe, it, expect } from "vitest";
import { calcMonth } from "../utilities/calcMonth";
import type { Transaction } from "../types/type";


describe('calcMonth utility', () => {
    it('should correctly group transaction by month', () => {
        const mockTransactions: Transaction[] = [
          {
            id: "1",
            amount: 1000,
            type: "income",
            date: "2024-01-10",
            category: "S",
            description: "",
          }, 
          {
            id: "2",
            amount: 200,
            type: "expense",
            date: "2024-01-15",
            category: "F",
            description: "",
          }, 
          {
            id: "3",
            amount: 500,
            type: "income",
            date: "2024-02-05",
            category: "S",
            description: "",
          }, 
        ];
        let result = calcMonth(mockTransactions)
        expect(result).toHaveLength(2)
        
        let jan = result.find((r) => r.month === 'Jan')
        expect(jan?.income).toBe(1000)
        expect(jan?.expense).toBe(200)

        let feb = result.find((r) => r.month === 'Feb')
        expect(feb?.income).toBe(500)
        expect(feb?.expense).toBe(0);
    })
    it('should ignore months that are not in the mapping (like July)', () => {
        const mockTransactions: Transaction[] = [
            { id: '4', amount: 100, type: 'income', date: '2024-07-20', category: 'S', description: '' },
        ];
        let result = calcMonth(mockTransactions)
        expect(result).toHaveLength(0)
    })
})