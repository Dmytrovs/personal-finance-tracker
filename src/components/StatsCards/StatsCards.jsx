import styles from "./StatsCards.module.css";

const StatsCards = () => {
  return (
    <div className={styles.statsContainer}>
      {/*  Income Card */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Total Income</h2>
        <div className={`${styles.cardAmount} ${styles.income}`}>
          + $2,000.00
        </div>
      </div>

      {/* Expense Card */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Total Expense</h2>
        <div className={`${styles.cardAmount} ${styles.expense}`}>
          – $750.00
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
