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
