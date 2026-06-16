import styles from "./TransactionTable.module.css";

const TransactionTable = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Transaction History</h3>

      <div className={styles.tableCardContainer}>
        <div className={styles.tableResponsive}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
                <th className={styles.actionsHeader}></th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t) => {
                const isExpense = t.type === "Expense";

                return (
                  <tr key={t.id} className={styles.row}>
                    <td className={styles.dateCell}>{t.date}</td>
                    <td className={styles.descCell}>{t.description}</td>
                    <td
                      className={`${styles.amountCell} ${isExpense ? styles.expense : styles.income}`}
                    >
                      {isExpense
                        ? `-$${t.amount.toFixed(2)}`
                        : `+$${t.amount.toFixed(2)}`}
                    </td>
                    <td
                      className={`${styles.typeCell} ${isExpense ? styles.expenseText : styles.incomeText}`}
                    >
                      {t.type}
                    </td>
                    <td className={styles.buttonsCell}>
                      {/* button edit blue */}
                      <button
                        className={`${styles.actionBtn} ${styles.editBtn}`}
                        title="Edit"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>

                      {/* delete button red */}
                      <button
                        className={`${styles.actionBtn} ${styles.deleteBtn} ${styles.icondelete}`}
                        title="Delete"
                        onClick={() => onDeleteTransaction(t.id)}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooterActions}>
          <button className={`${styles.footerBtn} ${styles.footerBtnEdit}`}>
            Edit
          </button>
          <button className={`${styles.footerBtn} ${styles.footerBtnDelete}`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
