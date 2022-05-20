import { createSlice } from "@reduxjs/toolkit";


export const question=createSlice({
    name:"question",
    initialState:{
        classroom_id:"",
        value:[],
        msg:"",
    },
    reducers:{
        setQuestion:function(state,action){
            
            state.value=action.payload.question;
            state.classroom_id=action.payload.classroom_id;
            state.msg=action.payload.msg;
            
        }
    }
        
})

export const{setQuestion}=question.actions

export default question.reducer