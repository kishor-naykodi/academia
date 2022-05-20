import { createSlice } from "@reduxjs/toolkit";

const questionWithAnswer= createSlice({
    name:'questionWithAnswer',
    initialState:{
        qid:"",
        question:{},
        answer:[],
    },
    reducers:{
        setQuestionWithAnswer:function(state,action){
           console.log(action.payload)
            if(action.payload.question){
                state.question=action.payload.question
                state.qid=action.payload.qid
                
            }
            if(action.payload.answers.length>=0){
                state.answer=action.payload.answers
            }
            


        }
    }

})

export const{setQuestionWithAnswer}=questionWithAnswer.actions
export default questionWithAnswer.reducer