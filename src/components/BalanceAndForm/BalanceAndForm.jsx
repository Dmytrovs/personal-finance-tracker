import { useState, useEffect } from "react";
import styles from "./BalanceAndForm.module.css";

const BalanceAndForm = ({
  onAddTransaction,
  currentBalance,
  editingTransaction,
  onUpdateTransaction,
  onCancelEdit,
}) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTransaction) {
      setAmount(editingTransaction.amount.toString());
      setDescription(
        editingTransaction.desc || editingTransaction.description || "",
      );
    } else {
      setAmount("");
      setDescription("");
    }
  }, [editingTransaction]);

  //Function to create a new transaction
 const handleCreate = (type) => {
    if (!amount) return;

    onAddTransaction({
      amount: Number(amount),
      desc: description || "No description",
      description: description || "No description",
      type: type,
    });

    setAmount("");
    setDescription("");
  };

  // Function for saving the edited transaction
  const handleSaveEdit = () => {
    if (!amount || Number(amount) === 0 || !editingTransaction) return;

    onUpdateTransaction({
      ...editingTransaction, 
      amount: Number(amount),
      desc: description || "No description",
      description: description || "No description",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        Current Balance:{" "}
        <span className={styles.balanceAmount}>
          {currentBalance >= 0
            ? `$${currentBalance.toFixed(2)}`
            : `-$${Math.abs(currentBalance.toFixed(2))}`}
        </span>
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
          {editingTransaction ? (
            <>
              <button
                className={`${styles.btn} ${styles.btnIncome}`}
                onClick={() => handleSaveEdit()}
              >
                Save Changes
              </button>
              <button
                className={`${styles.btn} ${styles.btnExpense}`}
                onClick={onCancelEdit}
                style={{
                  backgroundColor: "#9ca3af",
                  borderColor: "#71717a",
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                className={`${styles.btn} ${styles.btnIncome}`}
                onClick={() => handleCreate("Income")}
              >
                Add Income
              </button>
              <button
                className={`${styles.btn} ${styles.btnExpense}`}
                onClick={() => handleCreate("Expense")}
              >
                Add Expense
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BalanceAndForm;
