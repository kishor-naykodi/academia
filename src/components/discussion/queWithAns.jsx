import { Link } from "react-router-dom";
function QuestionWithAns(params) {
  const que_id = 3;

  return (
    <>
      <div className="header_bar subject_bar">
        <div className="header_one subject_bar_header">Answers</div>
        <div className="header_one">
          <Link to="/subjects">Subjects</Link>
        </div>
        <div className="header_one">
          <Link to="/popularquestion">Popular questions</Link>
        </div>
      </div>
      <div className="answer_Container_background">
        <div className="queastions_container">
          <div className="name_container">
            <div className="name">Abhsihek</div>
            <div className="tag_name tags">Professionals</div>
            <div className="sub_text">
              <div className="asked">Asked :</div>
              <div className="date name">Date</div>
            </div>
            <div className="sub_text">
              <div className="in">In :</div>

              <div className="language name">language</div>
            </div>
          </div>
          <div className="queastion_container">
            <div className="queastion">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              velit architecto dolor voluptatum ullam quaerat reiciendis
              provident, blanditiis ipsa possimus, est perspiciatis! Veniam illo
              sequi incidunt est, non rerum eius.
            </div>
          </div>
          <div className="tags_container">
            <div className="tags">English</div>
            <div className="tags">language</div>
          </div>

          <div className="answer_container_background">
            <div className="detail_answer_container">
              <div className="answer_detail">
                <div className="answer_detail_header">
                  <div className="answer_user">UserName</div>
                  <div className="answer_sub_text">
                    <div className="answered">Answerd :</div>
                    <div className="date name">Date :</div>
                  </div>
                </div>

                <div className="answer_detail_answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti doloribus ab odio ipsa quos accusamus dicta eligendi
                  incidunt beatae, similique iure vitae voluptate unde natus ex
                  doloremque praesentium reiciendis error. Ducimus possimus
                  corrupti dignissimos distinctio odio quisquam, expedita vel
                  nostrum facilis perferendis veritatis repellat doloremque.
                  Distinctio non nulla nesciunt doloribus.
                </div>
              </div>
            </div>
            <div className="detail_answer_container">
              <div className="answer_detail">
                <div className="answer_detail_header">
                  <div className="answer_user">UserName</div>
                  <div className="answer_sub_text">
                    <div className="answered">Answerd :</div>
                    <div className="date name">Date :</div>
                  </div>
                </div>

                <div className="answer_detail_answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti doloribus ab odio ipsa quos accusamus dicta eligendi
                  incidunt beatae, similique iure vitae voluptate unde natus ex
                  doloremque praesentium reiciendis error. Ducimus possimus
                  corrupti dignissimos distinctio odio quisquam, expedita vel
                  nostrum facilis perferendis veritatis repellat doloremque.
                  Distinctio non nulla nesciunt doloribus.
                </div>
              </div>
            </div>
            <div className="detail_answer_container">
              <div className="answer_detail">
                <div className="answer_detail_header">
                  <div className="answer_user">UserName</div>
                  <div className="answer_sub_text">
                    <div className="answered">Answerd :</div>
                    <div className="date name">Date :</div>
                  </div>
                </div>

                <div className="answer_detail_answer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti doloribus ab odio ipsa quos accusamus dicta eligendi
                  incidunt beatae, similique iure vitae voluptate unde natus ex
                  doloremque praesentium reiciendis error. Ducimus possimus
                  corrupti dignissimos distinctio odio quisquam, expedita vel
                  nostrum facilis perferendis veritatis repellat doloremque.
                  Distinctio non nulla nesciunt doloribus.
                </div>
              </div>
            </div>
          </div>

          <div className="show_all_ans_btn_background">
            <div className="show_all_ans_btn btn-disc">
              <Link to={`/question/allans/${que_id}`}>Show all Answers</Link>
            </div>
          </div>

          <div className="answer_submit_container">
            <form
              action="#"
              method="post"
              id="submit_answer"
              className="submit_answer_form"
            >
              <div className="form_answer_container">
                <label className="form_input" for="answer">
                  Leave your answer
                </label>
                <input className="answer_box" type="text" name="answer" />
              </div>
              <div className="form_answer_container">
                <input
                  type="text"
                  className="disc-input"
                  name="name"
                  placeholder="Your name"
                />

                <input
                  type="email"
                  className="disc-input"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="form_answer_container">
                <label for="file"> Upload the file </label>
                <input type="file" className="input_file" name="file" />
              </div>

              <input
                className="btn-disc ans_submit_btn"
                type="submit"
                value="Submit Your answer"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuestionWithAns;
