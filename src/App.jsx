import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import BalanceAndForm from "./components/BalanceAndForm/BalanceAndForm";
import StatsCards from "./components/StatsCards/StatsCards";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import ActionButtonClearAll from "./components/ActionButtonClearAll/ActionButtonClearAll";
import styles from "./App.module.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("budget_transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [selectedId, setSelectedId] = useState(null);

  // Updating localStorage when transactions change
  useEffect(() => {
    localStorage.setItem("budget_transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Finding the selected transaction item
  const editingTransaction =
    transactions.find((transaction) => transaction.id === selectedId) || null;

  // Function to save the edited transaction
  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction,
      ),
    );
    setSelectedId(null);
  };

  const handleSelectTransaction = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

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

  // Deleting a specific line
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
    if (selectedId === id) setSelectedId(null);
  };

  // Delete function for the big Delete button in the table footer
  const deleteSelectedTransaction = () => {
    if (selectedId === null) return;
    setTransactions(
      transactions.filter((transaction) => transaction.id !== selectedId),
    );
    setSelectedId(null);
  };

  const clearAllTransactions = () => {
    setTransactions([]);
    setSelectedId(null);
  };

  return (
    <>
      <Header />
      <div className="container">
        <BalanceAndForm
          onAddTransaction={addTransaction}
          currentBalance={currentBalance}
          editingTransaction={editingTransaction}
          onUpdateTransaction={updateTransaction}
          onCancelEdit={() => setSelectedId(null)}
        />
        <StatsCards totalIncome={totalIncome} totalExpense={totalExpense} />
        <TransactionTable
          transactions={transactions}
          onDeleteTransaction={deleteTransaction}
          selectedId={selectedId}
          onSelectTransaction={handleSelectTransaction}
          onDeleteSelected={deleteSelectedTransaction}
        />
        {transactions.length > 0 ? ( <ActionButtonClearAll onClearAllTransactions={clearAllTransactions} />) : null}
      </div>
    </>
  );
}

export default App;
