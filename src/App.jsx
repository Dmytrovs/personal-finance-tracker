import { useState } from "react";
import Header from "./components/Header/Header";
import BalanceAndForm from "./components/BalanceAndForm/BalanceAndForm";
import StatsCards from "./components/StatsCards/StatsCards";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import ActionButtonClearAll from "./components/ActionButtonClearAll/ActionButtonClearAll";
import styles from "./App.module.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "10/15/2026",
      desc: "Groceries",
      amount: 100.0,
      type: "Expense",
    },
    {
      id: 2,
      date: "10/14/2026",
      desc: "Salary",
      amount: 2000.0,
      type: "Income",
    },
    {
      id: 3,
      date: "10/12/2026",
      desc: "Movie Tickets",
      amount: 50.0,
      type: "Expense",
    },
    {
      id: 4,
      date: "10/10/2026",
      desc: "Freelance Work",
      amount: 150.0,
      type: "Income",
    },
  ]);

   const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

   const totalExpense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const currentBalance = totalIncome - totalExpense;

  const addTransaction = (newTransaction) => {
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

    //Creating a transaction object
    const transactionWithId = {
      id: Date.now(),
      date: formattedDate,
      ...newTransaction,
    };

    setTransactions([transactionWithId, ...transactions]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id)
    setTransactions(updatedTransactions)
  }

  return (
    <>
      <Header />
      <div className="container">
        <BalanceAndForm onAddTransaction={addTransaction} currentBalance={currentBalance} />
        <StatsCards totalIncome={totalIncome}  totalExpense={totalExpense}/>
        <TransactionTable transactions={transactions} onDeleteTransaction={deleteTransaction} />
        <ActionButtonClearAll />
      </div>
    </>
  );
}

export default App;
