import * as NoteActionType from '../actiontype/noteactiontype';


export const createNote = (index,title,content) =>{
    return{
        type: NoteActionType.CREATE_NOTE,
        index,
        title,
        content        
    }
}

export const editNote = (index,title,content) =>{
    return{
        type: NoteActionType.ADD_NOTE,
        title,
        content
    }
}

export const deleteNote = (index) =>{
    return{
        type: NoteActionType.ADD_NOTE,
        index   
    }
}

