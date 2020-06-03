import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/");

      dispatch({ type: "GET_TRANSACTION", payload: res.data });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
    }
  };

  const addTransactions = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/", transaction, config);
      dispatch({ type: "ADD_TRANSACTION", payload: res.data });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransactions,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
