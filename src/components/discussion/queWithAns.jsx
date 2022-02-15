import { Link } from "react-router-dom";
function QuestionWithAns(params) {
  const que_id = 3;

  return (
    <>
      <div class="header_bar subject_bar">
        <div class="header_one subject_bar_header">Answers</div>
        <div class="header_one">
          <Link to="/subjects">Subjects</Link>
        </div>
        <div class="header_one">
          <Link to="/popularquestion">Popular questions</Link>
        </div>
      </div>
      <div class="answer_Container_background">
        <div class="queastions_container">
          <div class="name_container">
            <div class="name">Abhsihek</div>
            <div class="tag_name tags">Professionals</div>
            <div class="sub_text">
              <div class="asked">Asked :</div>
              <div class="date name">Date</div>
            </div>
            <div class="sub_text">
              <div class="in">In :</div>

              <div class="language name">language</div>
            </div>
          </div>
          <div class="queastion_container">
            <div class="queastion">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              velit architecto dolor voluptatum ullam quaerat reiciendis
              provident, blanditiis ipsa possimus, est perspiciatis! Veniam illo
              sequi incidunt est, non rerum eius.
            </div>
          </div>
          <div class="tags_container">
            <div class="tags">English</div>
            <div class="tags">language</div>
          </div>

          <div class="answer_container_background">
            <div class="detail_answer_container">
              <div class="answer_detail">
                <div class="answer_detail_header">
                  <div class="answer_user">UserName</div>
                  <div class="answer_sub_text">
                    <div class="answered">Answerd :</div>
                    <div class="date name">Date :</div>
                  </div>
                </div>

                <div class="answer_detail_answer">
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
            <div class="detail_answer_container">
              <div class="answer_detail">
                <div class="answer_detail_header">
                  <div class="answer_user">UserName</div>
                  <div class="answer_sub_text">
                    <div class="answered">Answerd :</div>
                    <div class="date name">Date :</div>
                  </div>
                </div>

                <div class="answer_detail_answer">
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
            <div class="detail_answer_container">
              <div class="answer_detail">
                <div class="answer_detail_header">
                  <div class="answer_user">UserName</div>
                  <div class="answer_sub_text">
                    <div class="answered">Answerd :</div>
                    <div class="date name">Date :</div>
                  </div>
                </div>

                <div class="answer_detail_answer">
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

          <div class="show_all_ans_btn_background">
            <div class="show_all_ans_btn btn-disc">
              <Link to={`/question/allans/${que_id}`}>Show all Answers</Link>
            </div>
          </div>

          <div class="answer_submit_container">
            <form
              action="#"
              method="post"
              id="submit_answer"
              class="submit_answer_form"
            >
              <div class="form_answer_container">
                <label class="form_input" for="answer">
                  Leave your answer
                </label>
                <input class="answer_box" type="text" name="answer" />
              </div>
              <div class="form_answer_container">
                <input
                  type="text"
                  class="disc-input"
                  name="name"
                  placeholder="Your name"
                />

                <input
                  type="email"
                  class="disc-input"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div class="form_answer_container">
                <label for="file"> Upload the file </label>
                <input type="file" class="input_file" name="file" />
              </div>

              <input
                class="btn-disc ans_submit_btn"
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
