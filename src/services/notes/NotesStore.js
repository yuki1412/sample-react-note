import { observable, computed } from 'mobx';
import moment from 'moment';
import axios from 'axios';

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
  notes = [
    {
    title: 'For testing purpose',
    text: 'some text ...blablabla',
    index: 0,
  },
    {
    title: 'Second note',
    text: 'some text ...blablabla',
    index: 1,
  },
];

  @observable
  posts = [];

  @observable
  isLoading = true;

  @observable
  filteredNotes = [];

  @observable
  searchingValue = '';

  @computed
  get notesCount() {
    console.log(this.notes);
    return this.notes.length;
  }
  constructor(){
    this.fetchPosts();
    this.searchNote();
  }

  fetchPosts () {
    this.isLoading = true;
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((res) => {
      console.log(res.data);
      console.log(res.data.name);
      this.posts = res.data;
      this.isLoading = false;
    });
  }
  ucFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  addNote(title, text) {
    if (text === '' && title === '') {
      return;
    }
    const newNote = {
      title: title,
      text: text,
      id: generateRandomId(),
      createdAt: generateTimeStamp(),
      index: this.notesCount,
    };
    this.notes.push(newNote);
  }

  deleteNote(id) {
    this.notes = this.notes.filter(item => item.id !== id);
  }

  searchNote() {
    if (this.searchingValue !== '')
      this.filteredNotes = this.notes.filter(item => item.title.toUpperCase().includes(this.searchingValue.toUpperCase()));
    else
      this.filteredNotes = this.notes;
  }
  // editNote(text) {
  //   this.notes.filter(item => item.text === text);
  //   console.log(this.notes);
  //   // let temp = this.notes.filter(item => item.id === id);
  //   // console.log(temp[0].Target);
  // }


}

export default new NotesStore();
