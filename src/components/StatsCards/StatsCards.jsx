import styles from "./StatsCards.module.css";

const StatsCards = ({ totalIncome, totalExpense }) => {
  return (
    <div className={styles.statsContainer}>
      {/*  Income Card */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Total Income</h2>
        <div className={`${styles.cardAmount} ${styles.income}`}>
          +${totalIncome.toFixed(2)}
        </div>
      </div>

      {/* Expense Card */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Total Expense</h2>
        <div className={`${styles.cardAmount} ${styles.expense}`}>
          -${totalExpense.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
