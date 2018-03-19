import React, { Component } from 'react';
import ListNotes from './component/notes/ListNotes';
import CreateNote from './component/notes/CreateNote';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NoteAction from '../src/actions/noteaction';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.newNote = this.newNote.bind(this);
  }

  newNote() {
   NoteAction.createNote  
  }

  render() {

    const { dispatch, notes } = this.props;
    // const addnote = bindActionCreators(NoteAction.addnote,dispatch);
    const noteComponents = notes.map((note, index) => (

      <ListNotes key={index}
        index={index}
        noteTitle={note.title}
        noteContent={note.content}
      />
    ));

    const createNoteComponents = (
      <CreateNote isOpen={this.state.modal} />
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Browser notes</h1>
        </header>
        <button onClick={this.newNote} className="btn btn-success text-left" >Create Note</button>
        <div className="row-container">
          {noteComponents}
        </div>
        {createNoteComponents}
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateProps)(App);
