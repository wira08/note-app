import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import HeadJumbotron from './components/HeadJumbotron'
import List from './components/List'
import Form from './components/Form'
import * as n from './helpers/Notes'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = n.getNotes()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = n.getNotes()
    setNotes([...notes])
  }

  const onClickNewNote = () => setSelectedNote(undefined)

  return (
    <Container>
      <HeadJumbotron />
      <Row>
        <Col xs={12} md={4}>
          <Button onClick={onClickNewNote} className="mb-4" variant="dark" block>
            New note
          </Button>
          <List notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </Col>

        <Col xs={12} md={8}>
          <Form refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
