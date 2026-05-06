# SmartWallet
# Description
SmartWallet is a mission driven financial platform built with React and TypeScript to make wealth building accessible to everyone, especially in challenging socioeconomic environments. By leveraging a robust, type-safe architecture and clean code, the platform empowers young users to take control of their future from an early age. Integrating advanced AI insights with an intuitive interface, SmartWallet simplifies complex financial data into actionable steps—all in one place. Built with a focus on a clean code and beautiful UI\UX.

## Live demo 
Link for live demo: https://smartwallet-eta.vercel.app/

## 📸 Screenshots (Work in Progress)
The project is currently under active development.

<img width="700" height="400" alt="image" src="./public/WhatsApp Image 2026-04-25 at 17.09.31.jpeg" />
<img width="700" height="400" alt="image" src="./public/WhatsApp Image 2026-05-06 at 12.57.05 (1).jpeg" />
<img width="700" height="400" alt="image" src="./public/WhatsApp Image 2026-05-06 at 12.57.05.jpeg" />



# Planning & design
<img width="700" height="400" alt="image" src="https://github.com/user-attachments/assets/61b5dc6e-8e45-43b4-934b-93f8ef159658" />

# 🚀 Key features
- Expense Tracking: Log and categorize daily transactions (Coming soon).
- Smart Analytics: Visualize your total balance, income, and expenses with a clean dashboard.
- AI Insights: Get personalized tips for saving and investing based on your data (Planned / In Progress).
- Live Market Rates: Real-time updates from the stock market (Coming soon).

# 🛠️ Tech stack
- Frontend: React.js + TypeScript (for robust type safety).
- Styling: Tailwind CSS.
- State Management: Context API.
- Navigation: React Routerv7.  
- Environment: Vite (for fast development).

## Challenges 
- Challenge: Transforming raw date strings into readable month names for the charts.
Solution: I used slice to extract the month number and mapped it to a name using a lookup object (e.g., "01" -> "Jan").
Logic: I grouped the data by month to calculate total income and expenses for each one.
Result: This created a clean, organized array that the dashboard can easily display.
- Challenge: Avoiding code duplication when calculating financial totals for different transaction types (Incomes vs. Expenses).
Solution: Instead of writing separate logic for each type, I applied the DRY (Don't Repeat Yourself) principle by creating a reusable helper function. This function uses filter and reduce to dynamically calculate totals based on the transaction type, making the codebase more maintainable and scalable.
- Challenge: I struggled with responsiveness in mobile and tablets, because the challenge was how to make the graphs and transactions tables responsive
and readable in small screens. 
Solution: I tried first to use techniques of truncate and text alignment however it didn't solve it properly so I tried to give more height to the 
graphs cards and smaller width, also I change the tables of transactions from grid in desktops to flex in mobiles and tablets in order to keep everything clear without breaking the cards or harming the UX.
- Challenge: Initially, when building the addTransaction function in WalletContext, I attempted to initialize a new transaction by fetching the entire existing array and manually creating an object with empty values.
Solution: Later I realized that I didn't need to do that since I already had a well-defined Transaction interface in TypeScript, so I need to put it in. I did let transactionList = [...transactions, Transaction].


## 🗺️ Planned roadmap (soon updates)
- Full CRUD Functionality: Allowing users to add, edit, and delete transactions.
- Make sure responsiveness for all devices.
- Extending system with planning integration of Coin Gecko API for stock tracking.

## 📚 What I Learned
- Building reusable UI components
- Data visualization with charts
- Working with TypeScript interfaces and union types
- How to use map, reduce, filter properly
- Working with libraries like recharts, lucide-react, React Router v7.
- JS dates start from 0-11
- Responsiveness with Tailwind CSS on graphs.

 # How to run
1.git clone https://github.com/Shir/smart-wallet.git
2. npm install
3. npm run dev
