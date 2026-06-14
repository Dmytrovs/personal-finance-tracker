import styles from "./ActionButtonClearAll.module.css";

const ActionButtonClearAll = () => {
  return (
    <div className={styles.clearAllWrapper}>
      <button className={styles.btnClearAll}>Clear All</button>
    </div>
  );
};

export default ActionButtonClearAll;
