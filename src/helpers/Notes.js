const notes = [
  // {id: 1, title: 'Note 1', body: 'testest'},
  // {id: 2, title: 'Note 2', body: 'hellohello'},
  // {id: 3, title: 'Note 3', body: 'ayayayayaya yaya'},
]

export function createNote(title, body) {
  const note = {
    id: Date.now(),
    title,
    body,
  }
  const notes = getNotes()
  notes.push(note)
  console.log('saved in local storage', notes)
  const jsonNotes = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNotes)
  // return note
}

export function getNote(id) {
  // const notes = getNotes()
  return notes.find((note) => note.id === id)
}

// 1. kolla om localstorage är tom
// 2. lägg till tom array till localstorage
// 3. lägg till ny data till localstorage

export function getNotes() {
  // const localNotes = localStorage.getItem('notes')

  // if (localNotes === null) {
  //   localStorage.setItem('notes', JSON.stringify([]))

  //   return []
  // }

  // const parsedNotes = JSON.parse(localNotes)

  // console.log('hej', parsedNotes)
  // console.log(typeof parsedNotes)
  // return parsedNotes

  // console.log('hej', localNotes)

  // const parsedNotes = 'notes'
  // console.log('GOT YOUR NOTES', parsedNotes)
  // return parsedNotes
  return notes
}

export function updateNote(id, title, body) {
  // const notes = getNotes()
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  // remove old note
  notes.splice(indexToUpdate, 1)
  // add new note to start
  notes.splice(0, 0, note)
  return notes
}

export function deleteNote(id) {
  const notes = getNotes()
  const indexToDelete = notes.findIndex((notes) => notes.id === id)
  if ((indexToDelete) => 0) notes.splice(indexToDelete, 1)
  return true
}
