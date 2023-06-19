import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance(props) {
  return (
    <Statistic size={props.data.size} color={props.data.color}>
                <Statistic.Label style={{ textAlign: props.data.alignment }}>
                  {props.data.title}
                </Statistic.Label>
                <Statistic.Value>{props.data.expense}</Statistic.Value>
              </Statistic>
  )
}

export default DisplayBalance