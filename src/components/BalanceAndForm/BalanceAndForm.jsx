import { useState } from "react";
import styles from "./BalanceAndForm.module.css";

const BalanceAndForm = ({ onAddTransaction, currentBalance }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  //temp function for handling button clicks
  const handleAddTransaction = (type) => {
    if (!amount) return;

    onAddTransaction({
      amount: Number(amount),
      description: description || "No description",
      type: type, // 'Income' or 'Expense'
    });

    //Clearing the fields after sending
    setAmount("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        Current Balance: <span className={styles.balanceAmount}>{currentBalance >= 0 ? `$${currentBalance.toFixed(2)}` : `-$${Math.abs(currentBalance.toFixed(2))}`}</span>
      </div>

      <div className={styles.formRow}>
        <div className={styles.blockInput}>
          <div className={styles.inputWrapper}>
            <input
              type="number"
              placeholder="Enter Amount"
              className={styles.input}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span className={styles.currencySymbol}>$</span>
          </div>

          <input
            type="text"
            placeholder="Enter Description"
            className={styles.inputDesc}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.btn} ${styles.btnIncome}`}
            onClick={() => handleAddTransaction("Income")}
          >
            Add Income
          </button>
          <button
            className={`${styles.btn} ${styles.btnExpense}`}
            onClick={() => handleAddTransaction("Expense")}
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceAndForm;
