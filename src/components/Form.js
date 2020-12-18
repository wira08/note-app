import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Alert from 'react-bootstrap/Alert'
import {createNote, updateNote, deleteNote} from '../helpers/Notes'

const STATUS_INITIAL_VALUE = ''

export default function Form({selectedNote, refreshList}) {
  const [title, setTitle] = useState(STATUS_INITIAL_VALUE)
  const [body, setBody] = useState(STATUS_INITIAL_VALUE)
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE)
  const [deleteStatus, setDeleteStatus] = useState(STATUS_INITIAL_VALUE)

  const resetInput = () => {
    setTitle(STATUS_INITIAL_VALUE)
    setBody(STATUS_INITIAL_VALUE)
  }

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 3000)
  }, [status])

  useEffect(() => {
    setTimeout(() => setDeleteStatus(STATUS_INITIAL_VALUE), 3000)
  }, [deleteStatus])

  useEffect(() => {
    if (selectedNote) return [setTitle(selectedNote.title), setBody(selectedNote.body)]
    resetInput()
  }, [selectedNote])

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)

  const onSave = () => {
    resetInput()
    setStatus('Note Created!')

    if (selectedNote) {
      updateNote(selectedNote.id, title, body)
      setStatus('Note Updated!')
      return refreshList()
    }
    createNote(title, body, STATUS_INITIAL_VALUE)
    refreshList()
  }

  const onDelete = () => {
    const {id} = selectedNote
    deleteNote(id)
    setDeleteStatus('Note Deleted!')
    refreshList()
  }

  return (
    <div>
      <label htmlFor="title">Title</label>
      <InputGroup className="mb-3">
        <FormControl id="title" value={title} onChange={onChangeTitle} />
      </InputGroup>

      <label htmlFor="textarea">Note</label>
      <InputGroup className="mb-3">
        <FormControl as="textarea" value={body} onChange={onChangeBody} />
      </InputGroup>
      <div>
        <Button variant="primary" onClick={onSave}>
          Save
        </Button>{' '}
        {selectedNote && (
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        )}
      </div>
      {status && (
        <Alert variant="success" className="mt-3">
          {status}
        </Alert>
      )}
      {deleteStatus && (
        <Alert variant="danger" className="mt-3">
          {deleteStatus}
        </Alert>
      )}
    </div>
  )
}
