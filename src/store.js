import { createStore } from "redux";

const initialState = { balance: 0, loan: 0, loanPurpose: "" };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(deposit());
console.log(store.getState());

store.dispatch(withdraw());
console.log(store.getState());

store.dispatch(requestLoan());
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

// Action creators
function deposit() {
  return { type: "account/deposit", payload: 500 };
}

function withdraw() {
  return { type: "account/withdraw", payload: 200 };
}

function requestLoan() {
  return {
    type: "account/requestLoan",
    payload: { amount: 1000, purpose: "Buy a car" },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}
