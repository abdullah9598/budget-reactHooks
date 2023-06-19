import React from 'react'
import { Button } from'semantic-ui-react'

function ButtonSaveorCancel(props) {
  return (
    <Button.Group style={{marginTop:'20px'}}>
          <Button color='red'>Cancel</Button>
          <Button.Or color='orange'/>
          <Button color='blue'>Add Transaction</Button>
        </Button.Group>
  )
}

export default ButtonSaveorCancel