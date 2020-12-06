// import React from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// import {createNote} from '../utils/noteHelpers'

export default function Form() {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <InputGroup className="mb-3">
        <FormControl id="title" aria-describedby="basic-addon3" />
      </InputGroup>

      <label htmlFor="textarea">Note</label>
      <InputGroup>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
      <br />
      <div>
        <Button variant="primary">Save</Button> <Button variant="danger">Delete</Button>
      </div>
    </div>
  )
}
