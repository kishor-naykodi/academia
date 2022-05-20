import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack' ;
import {useParams} from 'react-router-dom';
import {useEffect} from "react"
import axios from 'axios';
import {useDispatch,useSelector} from "react-redux";
import actions from "../../features/actions"



function QuestionWithAns(params) {
  
  const dispatch=useDispatch();

  const questionWithAns=useSelector((states)=>states.questionWithAnswer);
  console.log(questionWithAns)

  const {id} =useParams();
   
  useEffect(()=>{
    async function fetchQuestion_with_answer(){
      const question_with_Answer= await axios.get(`http://localhost:3001/api/discussion/retrieve_question/${id}`);
      const question_with_Answer_data=question_with_Answer.data
      const finalize_object={
        qid:id,
        question:question_with_Answer_data.question,
        answers:question_with_Answer_data.answers,
      }
     
      dispatch(actions.setQuestionWithAnswer(finalize_object));

    } 
    
    fetchQuestion_with_answer();

   },[id,dispatch])

function Tags(){
  if(questionWithAns.question.tags){
    return(
      questionWithAns.question.tags.map((item)=>{
        return(
          <div className="tags">{item}</div>
        )
      })
    )
  }
  else{
    return(
      <div></div>

    )
  }
}
function Answer(){
  if (questionWithAns.answer){
    return(
      questionWithAns.answer.map((item)=>{
        return(
          <div className="detail_answer_container">
              <div className="answer_detail">
                <div className="answer_detail_header">
                  <div className="answer_user">
                    <span className="posted_by">Posted By :</span> {item.user.username}
                  </div>
                  <div className="answer_sub_text">
                    <div className="date_name">
                      <span className="posted_by">Date :</span> {item.user.date}
                    </div>
                  </div>
                </div>

                <div className="answer_detail_answer">
                  {item.answer}
                </div>
              </div>
            </div>
        )
      })
    )
  }
  else{
    return(
      <div></div>
    )
  }
}

  return (
    <>
      <div className="header_bar subject_bar">
        <div className="header_one backArrow">
          <Link to="/question">
            <ArrowBackIcon />
          </Link>
        </div>
        <div className="header_one subject_bar_header">Answers</div>
      </div>
      
      
      <div className="answer_Container_background">
        <div className="queastions_container">
          <div className="name_container">
            <div className="name">Abhsihek</div>

            <div className="sub_text">
              <div className="asked">Asked :</div>
              <div className="date">Date</div>
            </div>
            <div className="sub_text">
              <div className="in">In :</div>

              <div className="language name">language</div>
            </div>
            <div className="tag_name tags">Question</div>
          </div>
          <div className="queastion_container">
            <div className="queastion">
              {questionWithAns?questionWithAns.question.question:""}
            </div>
          </div>
          <div className="tags_container">
            <Tags/>
          
          </div>
          <div className="divider"></div>
          <div className="answer_container_background">
            <Answer/>
            {/*  */}

          </div>

          <div className="show_all_ans_btn_background">
            <div className="show_all_ans_btn btn-disc">
              <Link to={`/question/allans/${id}`}>Show all Answers</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuestionWithAns;
