import { createStore } from "redux";

const initialState = { balance: 0, loan: 0, loanPurpose: "" };

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payloads };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload };

    case "payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};