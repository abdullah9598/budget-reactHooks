import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Segment,
  Grid,
  Icon,
  Form,
} from "semantic-ui-react";

import MainHeader from "./component/MainHeader";
import ButtonSaveorCancel from "./component/ButtonSaveorCancel";
import NewEntryForm from "./component/NewEntryForm";
import DisplayBalance from "./component/DisplayBalance";
import DisplayBalances from "./component/DisplayBalances";

function App() {
  //   const InputExampleLoadingWithoutIcon = () => (
  //   <Input loading placeholder='Search...' />
  // )

  return (
    <Container>
      <MainHeader title="MyBudgetApp" type="h2" color="purple" />
      <DisplayBalance data={{color:'black',title:'Budget',expense:'12500 USD'}} />

      {/* Income and Expense segement */}
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            {/* Column 1 Income */}
            <Grid.Column textAlign="center">
            <DisplayBalance data={{size:'tiny',color:'green',alignment:'center',title:'Income',expense:'24999 USD'}} />
            </Grid.Column>

            {/* Column 2 Expenes */}
            <Grid.Column>
              <DisplayBalance data={{size:'tiny',color:'red',alignment:'center',title:'Expense',expense:'750 USD'}} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* Transaction history segment */}
      <MainHeader type="h3" title="History" />

       <DisplayBalances />

      <br />
      <MainHeader type="h2" title="ADD NEW TRANSACTION" />
      <Form unstackable>
        <NewEntryForm />
        <ButtonSaveorCancel />
      </Form>
    </Container>
  );
}

export default App;
