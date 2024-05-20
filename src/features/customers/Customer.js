import React from "react";

import { useSelector } from "react-redux";

function Customer() {
  const name = useSelector((store) => store.customer.fullName);

  return (
    <h2>
      <span role="img" aria-label="Clap">
        👋
      </span>
      Welcome, {name}
    </h2>
  );
}

export default Customer;
