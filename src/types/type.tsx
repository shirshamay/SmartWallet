import React from "react"
export interface SideBarElement {
    label: string,
    icon: React.ReactNode,
};
export interface StatCardProps {
    trend?: string,
    variant: string,
    title: string,
    amount: number,
    icon: React.ReactNode,
};
export interface Transactions {
    date: string,
    description: string,
    category: string,
    amount: number,
    type: "income" | "expense", // it will help with .filter later
}
