import { createSlice } from "@reduxjs/toolkit";



export const notesSlice = createSlice({
  name: "notes",    
  initialState: {
    value: localStorage.getItem("LocalStorageNotes") ?  JSON.parse(localStorage.getItem("LocalStorageNotes")) : []
  },
  reducers: {
    

    
    
  }
},
)


export const  { addNote, deleteNote, deleteAllNotes } = notesSlice.actions
export default notesSlice.reducer