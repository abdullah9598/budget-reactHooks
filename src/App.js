import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Header,
  Segment,
  Statistic,
  Grid,
  Icon,
  Form,
  Input,
  Button,
} from "semantic-ui-react";

function App() {
  //   const InputExampleLoadingWithoutIcon = () => (
  //   <Input loading placeholder='Search...' />
  // )

  return (
    <Container>
      {/* Header of the application */}
      <Header as="h1" color="purple">
        Budget App
      </Header>
      <Statistic>
        <Statistic.Label>Your Balance : </Statistic.Label>
        <Statistic.Value> $ 2550.00</Statistic.Value>
      </Statistic>

      {/* Income and Expense segement */}
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            {/* Column 1 Income */}
            <Grid.Column textAlign="center">
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "center" }}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>1045.50 USD</Statistic.Value>
              </Statistic>
            </Grid.Column>

            {/* Column 2 Expenes */}
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "center" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>755.50 USD</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* Transaction history segment */}
      <Header as="h3">History</Header>

      <Segment color="red">
        <Grid columns={3} textAlign="center" divided>
          <Grid.Row>
            <Grid.Column width={9} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3}>$299</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" style={{ cursor: "pointer" }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <br />

      <Header as="h2">ADD NEW TRANSACTION</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            placeholder="Enter transaction here"
            icon="tags"
            label="Name"
            width={12}
          ></Form.Input>

          <Form.Input
            placeholder="Value"
            icon="dollar"
            label="Value"
            width={4}
          ></Form.Input>
        </Form.Group>

        <Button.Group style={{marginTop:'20px'}}>
          <Button color='red'>Cancel</Button>
          <Button.Or color='orange'/>
          <Button color='blue'>Add Transaction</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
