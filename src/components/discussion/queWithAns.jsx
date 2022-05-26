import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack' ;
import {useParams} from 'react-router-dom';
import {useEffect,useState} from "react"
import axios from 'axios';
import {useDispatch,useSelector} from "react-redux";
import actions from "../../features/actions"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useNavigate } from "react-router-dom"



function QuestionWithAns(params) {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch();
  const [submitAnswer,setSubmitAnswer]= useState("");
  const [msg,setMsg]=useState(null)
  const navigate=useNavigate()
  

  const questionWithAns=useSelector((states)=>states.questionWithAnswer);
  const user=useSelector((states)=>states.user);
  const {id} =useParams();
  
  const style = {
  position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'None',
    boxShadow: 24,
    p: 4,
   
  };
   
  
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
async function SubmitAnswer() {
 try {
  if(questionWithAns.qid){
    
    const results=await axios.post(`http://localhost:3001/api/discussion/answer/${questionWithAns.qid}`,{
      "answer":`${submitAnswer}`,
      "user":{"username":`${user.value.username}`},
      "question_id":`${questionWithAns.qid}`,
       "user_id":`${user.value._id}`
      });
      // setMsg("Answer Submitted successfully");
      alert(`Answer Submitted successfully`);
      handleClose()
      navigate(`/question`)
  }
   
 } catch (error) {
   console.log(error)
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
          <Button onClick={handleOpen}>Submit Your Answer</Button>
          <div className="answer_container_background">
            <Answer/>
            {/*  */}

          </div>

          {/* <div className="show_all_ans_btn_background">
            <div className="show_all_ans_btn btn-disc">
              <Link to={`/question/allans/${id}`}>Show all Answers</Link>
            </div>
          </div> */}
         
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
             
                <div className="submitAnswerContainer">
                  <div className="submitAnswerTitle" >
                    Enter Your Answer
                  </div>
                  <div>
                  <textarea className="answer_textarea" onChange={(e)=>{setSubmitAnswer(e.target.value)}} defaultValue={submitAnswer}>
                   
                  </textarea>
                  </div>
                  <div className="show_all_ans_btn_background">
                <div className="show_all_ans_btn btn-disc" onClick={SubmitAnswer}>
                  Submit Your Answer
                </div>
                   </div>
                
                </div>
                
                

            
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}
export default QuestionWithAns;
