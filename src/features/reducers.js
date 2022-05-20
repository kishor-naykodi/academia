import questionReducer from './question';
import classroomReducer from './classroom';
import userReducer from './user';
import questionWithAnswerReducer from './singleQuestionWithAnswer';

const allReducers={
    user:userReducer,
    classroom:classroomReducer,
    question:questionReducer,
    questionWithAnswer:questionWithAnswerReducer
}
export default allReducers