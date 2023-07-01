import React from 'react'

import { Segment,Grid, Icon } from 'semantic-ui-react'

function Transaction(props) {
  return (
<Segment color={props.color}>
    <Grid columns={3} textAlign="center" divided>
      <Grid.Row>
        <Grid.Column width={9} textAlign="left">
          {props.expenseName}
        </Grid.Column>
        <Grid.Column width={3}>{props.amount}</Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" />
          <Icon name="trash" style={{ cursor: "pointer" }} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default Transaction