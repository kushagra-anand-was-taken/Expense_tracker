import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/incomeExpenses";
import { TransactionList } from "./components/transactionList";
import { AddTransactions } from "./components/addTransactions";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </GlobalProvider>
    </div>
  );
}

export default App;
