import { observable, computed } from 'mobx';
import moment from 'moment';


function generateRandomId() {
  const randomString = Math.random()
    .toString(36)
    .substr(2, 9);
  return '_' + randomString;
}

function generateTimeStamp() {
  return moment().toISOString();
}

class NotesStore {
  @observable
  notes = []

  @computed
  get notesCount() {
    console.log(this.notes);
    return this.notes.length;
  }

  addNote(title,text) {
    if (text === '' && title === '') {
      return;
    }
    const newNote = {
      title: title,
      text: text,
      id: generateRandomId(),
      createdAt: generateTimeStamp(),
    };
    this.notes.push(newNote);
  }

  deleteNote(id) {
    this.notes = this.notes.filter(item => item.id !== id);
  }
}




export default new NotesStore();
