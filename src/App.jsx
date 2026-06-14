import Header from "./components/Header/Header";
import BalanceAndForm from "./components/BalanceAndForm/BalanceAndForm";
import StatsCards from "./components/StatsCards/StatsCards";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import ActionButtonClearAll from "./components/ActionButtonClearAll/ActionButtonClearAll";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BalanceAndForm />
        <StatsCards />
        <TransactionTable />
        <ActionButtonClearAll />
      </div>
    </>
  );
}

export default App;
