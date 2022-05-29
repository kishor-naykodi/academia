import { Link } from "react-router-dom";
import "../../css/discussion.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CancelIcon from "@mui/icons-material/Cancel";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import actions from "../../features/actions";
import axios from "axios";
import auth from "../../services/authService";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

function Question(params) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const user = useSelector((states) => states.user);
  const classroom = useSelector((states) => states.classroom);
  const questions = useSelector((states) => states.question);
  const [submitQuestion, setSubmitQuestion] = useState("");
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "None",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const userFromJWT = auth.getCurrentUser();

    if (userFromJWT._id) {
      dispatch(actions.setUser(userFromJWT));
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchclassroom = async () => {
      if (user.value._id) {
        const filter_classRooms_response = await axios.get(
          `http://localhost:3001/api/classroom/${user.value._id}`
        );
        const filter_classRooms = filter_classRooms_response.data;
        dispatch(actions.setClassroom(filter_classRooms));
        console.log(filter_classRooms);
      }
    };
    fetchclassroom();
  }, [user, dispatch, navigate]);
  useEffect(() => {});

  // ===============Function for toggeling states==================
  function toggleSubject() {
    const dropdown = document.querySelector(".dropDown_Menu");
    dropdown.classList.toggle("show");
  }
  // ==================Function for filtering questions classroomwise=========
  async function fetchQuestion(classroom_id) {
    try {
      const classroomViseQuestion_response = await axios.get(
        `http://localhost:3001/api/discussion/questions/${classroom_id}`
      );
      const classroomViseQuestion = classroomViseQuestion_response.data;
      dispatch(
        actions.setQuestion({
          question: classroomViseQuestion,
          classroom_id: classroom_id,
          msg: "ok",
        })
      );
    } catch (err) {
      dispatch(
        actions.setQuestion({
          question: [],
          classroom_id: classroom_id,
          msg: "No questions",
        })
      );
    }
  }
  // ==============================================================================

  // =====================Functions for mapping classrooms===============================
  function Classroom() {
    if (classroom.value && classroom.value.length >= 1) {
      return classroom.value.map((item) => {
        return (
          <div
            className="dropDown_item"
            key={item._id}
            onClick={() => fetchQuestion(item._id)}
          >
            {item.classname}
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }
  // ==================================================================
  // =================Function for maping Questions List============

  function Question() {
    if (questions) {
      return questions.value.map((item) => {
        return (
          <div className="queastions_container" key={item._id}>
            <div className="name_container">
              <div className="faint_name">Posted By: </div>
              <div className="name">{item ? item.user.username : "no"}</div>

              <div className="sub_text">
                <div className="asked">Asked :</div>
                <div className="date name">Date</div>
              </div>
              <div className="sub_text">
                <div className="in">In :</div>

                <div className="language name">language</div>
              </div>
              <div className="tag_name tags">Question</div>
            </div>
            <div className="queastion_container">
              <Link to={`/question/${item._id}`}>
                <div className="queastion">{item.question}</div>
              </Link>
            </div>

            <div className="tags_container">
              {item
                ? item.tags.map((item) => {
                    return (
                      <div className="tags" key={`${item}`}>
                        {item}
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }
  //  ==============================================================
  async function SubmitQuestion() {
    try {
      if (questions.classroom_id) {
        await axios.post(`http://localhost:3001/api/discussion/questions`, {
          question: `${submitQuestion}`,
          user: { username: `${user.value.username}` },
          classroom_id: `${questions.classroom_id}`,
          user_id: `${user.value._id}`,
        });
        // setMsg("Answer Submitted successfully");
        alert(`Question Submitted successfully`);
        handleClose();
        fetchQuestion(questions.classroom_id);
        setSubmitQuestion("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="header_bar">
        <div className="dropdown_container">
          <div className="dropDown_title" onClick={toggleSubject}>
            Classrooms
            <span>
              <ArrowDropDownIcon />
            </span>
          </div>
        </div>
        <div className="header_one home">
          <Link to="/">Home</Link>
        </div>
      </div>
      {/* ======================Drop down Menu============= */}
      <div className="dropDown_Menu ">
        <div className="cancelIcon" onClick={toggleSubject}>
          <CancelIcon />
        </div>
        <div className="dropDown_Menu_list">
          {classroom.msg === "ok" ? (
            <Classroom />
          ) : (
            <div className="classroom_msg">{classroom.msg}</div>
          )}
        </div>
        <div className="gradiant"></div>
      </div>
      {/* ======================Question container with one ans========= */}
      <div className="questions_container_background">
        {questions.value.length >= 1 ? (
          <>
            <Button onClick={handleOpen}>Ask The Question</Button>
            <Question />
          </>
        ) : (
          <div className="question_blank_msg">
            Possible reasons for not showing questions :<br />
            Looks Like You didn't selected classroom Or seems It does't have any
            questions.
            <br />
            Or you are not enrolled in any classroom yet.
            <br /> For checking you are enrolled in classroom or not,
            <br />
            Check top-left classroom tab.
          </div>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="submitAnswerContainer">
              <div className="submitAnswerTitle">Ask the Question</div>
              <div>
                <textarea
                  className="answer_textarea"
                  onChange={(e) => {
                    setSubmitQuestion(e.target.value);
                  }}
                  defaultValue={submitQuestion}
                ></textarea>
              </div>
              <div className="show_all_ans_btn_background">
                <div
                  className="show_all_ans_btn btn-disc"
                  onClick={SubmitQuestion}
                >
                  Submit Your Question
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Question;
