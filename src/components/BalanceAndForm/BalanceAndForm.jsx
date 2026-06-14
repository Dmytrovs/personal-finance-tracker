import styles from "./BalanceAndForm.module.css";

const BalanceAndForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        Current Balance: <span className={styles.balanceAmount}>$1250</span>
      </div>

      <div className={styles.formRow}>
        <div className={styles.blockInput}>
          <div className={styles.inputWrapper}>
            <input
              type="number"
              placeholder="Enter Amount"
              className={styles.input}
            />
            <span className={styles.currencySymbol}>$</span>
          </div>

          <input
            type="text"
            placeholder="Enter Description"
            className={styles.inputDesc}
          />
        </div>

        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnIncome}`}>
            Add Income
          </button>
          <button className={`${styles.btn} ${styles.btnExpence}`}>
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceAndForm;
