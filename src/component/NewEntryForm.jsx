import React from 'react'
import { Form } from 'semantic-ui-react'

function NewEntryForm() {
  return (
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
  )
}

export default NewEntryForm