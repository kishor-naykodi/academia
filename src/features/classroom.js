import { createSlice } from "@reduxjs/toolkit";


export const classroom=createSlice({
    name:"classroom",
    initialState:{
        value:[],
        msg:null
    },
    reducers:{
        setClassroom:function(state,action){
           
            state.value=action.payload.results;
            state.msg=action.payload.msg;
            
           
            
        }
    }
        
})

export const{setClassroom}=classroom.actions

export default classroom.reducer