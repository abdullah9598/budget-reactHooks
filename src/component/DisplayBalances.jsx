import React from "react";
// import { Segment, Grid, Icon } from "semantic-ui-react";
import Transaction from "./Transaction";

function DisplayBalances() {
  return (
    <>
      <Transaction color='red' expenseName='Shoes' price='399 USD'/>
      <Transaction color='red' expenseName='T Shirt' price='150 USD'/>
      <Transaction color='green' expenseName='Amount added' price='500 USD'/>
    </>
  );
}

export default DisplayBalances;
