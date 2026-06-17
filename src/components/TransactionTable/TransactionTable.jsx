import styles from "./TransactionTable.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const TransactionTable = ({
  transactions,
  onDeleteTransaction,
  selectedId,
  onSelectTransaction,
  onDeleteSelected,
}) => {
  if (transactions.length === 0) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Transaction History</h3>
        <div className={styles.emptyState}>
          <FaPlus className={styles.emptyIcon} />
          <p className={styles.emptyText}>No transactions yet</p>
          <p className={styles.emptySubtext}>
            Add your first income or expense above to start tracking!
          </p>
        </div>
      </div>
    );
  }

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

                const isSelected = t.id === selectedId;

                return (
                  <tr
                    key={t.id}
                    className={`${styles.row} ${isSelected ? styles.selectedRow : ""}`}
                    onClick={() => onSelectTransaction(t.id)}
                  >
                    <td className={styles.dateCell}>{t.date}</td>
                    <td className={styles.descCell}>
                      {t.description || t.desc}
                    </td>
                    <td
                      className={`${styles.amountCell} ${isExpense ? styles.expense : styles.income}`}
                    >
                      {isExpense
                        ? `-$${(t.amount || 0).toFixed(2)}`
                        : `+$${(t.amount || 0).toFixed(2)}`}
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
                        <FaPencil className={styles.iconActionBtn} />
                      </button>

                      {/* delete button red */}
                      <button
                        className={`${styles.actionBtn} ${styles.deleteBtn} ${styles.icondelete}`}
                        title="Delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteTransaction(t.id);
                        }}
                      >
                        <FaRegTrashCan className={styles.iconActionBtn} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooterActions}>
          <button
            className={`${styles.footerBtn} ${styles.footerBtnEdit}`}
            disabled={selectedId === null}
            style={{
              opacity: selectedId === null ? 0.5 : 1,
              cursor: selectedId === null ? "not-allowed" : "pointer",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Edit
          </button>
          <button
            className={`${styles.footerBtn} ${styles.footerBtnDelete}`}
            onClick={onDeleteSelected}
            disabled={selectedId === null}
            style={{
              opacity: selectedId === null ? 0.5 : 1,
              cursor: selectedId === null ? "not-allowed" : "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
