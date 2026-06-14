import Header from "./components/Header/Header";
import BalanceAndForm from "./components/BalanceAndForm/BalanceAndForm";
import StatsCards from './components/StatsCards/StatsCards'
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BalanceAndForm />
        <StatsCards />
      </div>
    </>
  );
}

export default App;
