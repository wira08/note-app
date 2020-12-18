import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
// import {getNotes} from '../helpers/Notes'

export default function List({selectedNote, setSelectedNote, notes}) {
  const [listStatus, setListStatus] = useState(false)
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }
  // console.log(listStatus)
  // console.log(notes)

  useEffect(() => {
    if (notes.length === 0) return setListStatus(true)
    return setListStatus(false)
  }, [notes])

  return (
    <ListGroup as="ul">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
      {/* {listStatus && <p>no note found</p>} */}
      {listStatus && <Alert variant="info">No note found.</Alert>}
    </ListGroup>
  )
}
