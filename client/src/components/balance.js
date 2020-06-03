import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>
        $
        {transactions
          .reduce((acc, qwe) => {
            return (acc += qwe.amount);
          }, 0)
          .toFixed(2)}
      </h1>
    </div>
  );
};
