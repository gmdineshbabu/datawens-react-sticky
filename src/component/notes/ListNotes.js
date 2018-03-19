import React, { Component } from 'react';
import '../../css/style.css';

class ListNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteIndex : props.index,
            noteTitle: props.noteTitle,
            noteContent: props.noteContent,
            noteStatus: props.noteStatus
        }
    }

    deleteNote(noteIndex){
        console.log(noteIndex);
    }

    render() {
        return (
            <div className="col-lg-4 box">
                <div className="note_container">
                    <header className="note_title row no-margin">
                        <span className="title col-10 no-padding">
                            {this.state.noteTitle} 
                        </span>
                        <span className="delete col-2 no-padding">
                            <button onClick={this.deleteNote(this.state.noteIndex)}>
                            <i className="fa fa-trash" aria-hidden="true"></i></button>
                        </span>
                        
                        {this.state.noteStatus}
                    </header>
                    <section className="note_content">
                        {this.state.noteContent}
                    </section>
                </div>
            </div>
        )
    }
}

export default ListNotes;