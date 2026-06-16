import styles from "./ActionButtonClearAll.module.css";

const ActionButtonClearAll = ({ onClearAllTransactions }) => {
  return (
    <div className={styles.clearAllWrapper}>
      <button className={styles.btnClearAll} onClick={onClearAllTransactions}>Clear All</button>
    </div>
  );
};

export default ActionButtonClearAll;
