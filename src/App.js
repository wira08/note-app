import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HeadJumbotron from './components/HeadJumbotron'
import List from './components/List'
import NewNoteBtn from './components/NewNoteBtn'
import Form from './components/Form'

function App() {
  return (
    <Container>
      <HeadJumbotron />
      <Row>
        <Col xs={12} md={4}>
          <NewNoteBtn />
          <br />
          <List />
        </Col>

        <Col xs={12} md={8}>
          <Form />
        </Col>
      </Row>
    </Container>
  )
}

export default App
