import { Link } from "react-router-dom";
import "../../css/discussion.css";

function Question(params) {
  const id = 1;
  return (
    <>
      <div className="header_bar">
        <div className="header_one">
          <Link to="/subjects">Subjects</Link>
        </div>
        <div className="header_one">
          <Link to="/popularquestion">Popular questions</Link>
        </div>
      </div>

      <div className="questions_container_background">
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
            <Link to={`/question/${id}`}>
              <div className="queastion">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum velit architecto dolor voluptatum ullam quaerat
                reiciendis provident, blanditiis ipsa possimus, est
                perspiciatis! Veniam illo sequi incidunt est, non rerum eius.
              </div>
            </Link>
          </div>
          <div className="answer_container">
            <div className="answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              doloribus ab odio ipsa quos accusamus dicta eligendi incidunt
              beatae, similique iure vitae voluptate unde natus ex doloremque
              praesentium reiciendis error. Ducimus possimus corrupti
              dignissimos distinctio odio quisquam, expedita vel nostrum facilis
              perferendis veritatis repellat doloremque. Distinctio non nulla
              nesciunt doloribus.
            </div>
          </div>
          <div className="tags_container">
            <div className="tags">English</div>
            <div className="tags">language</div>
          </div>
        </div>
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
            <Link to={`/question/${id}`}>
              <div className="queastion">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum velit architecto dolor voluptatum ullam quaerat
                reiciendis provident, blanditiis ipsa possimus, est
                perspiciatis! Veniam illo sequi incidunt est, non rerum eius.
              </div>
            </Link>
          </div>
          <div className="answer_container">
            <div className="answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              doloribus ab odio ipsa quos accusamus dicta eligendi incidunt
              beatae, similique iure vitae voluptate unde natus ex doloremque
              praesentium reiciendis error. Ducimus possimus corrupti
              dignissimos distinctio odio quisquam, expedita vel nostrum facilis
              perferendis veritatis repellat doloremque. Distinctio non nulla
              nesciunt doloribus.
            </div>
          </div>
          <div className="tags_container">
            <div className="tags">English</div>
            <div className="tags">language</div>
          </div>
        </div>
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
            <Link to={`/question/${id}`}>
              <div className="queastion">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum velit architecto dolor voluptatum ullam quaerat
                reiciendis provident, blanditiis ipsa possimus, est
                perspiciatis! Veniam illo sequi incidunt est, non rerum eius.
              </div>
            </Link>
          </div>
          <div className="answer_container">
            <div className="answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              doloribus ab odio ipsa quos accusamus dicta eligendi incidunt
              beatae, similique iure vitae voluptate unde natus ex doloremque
              praesentium reiciendis error. Ducimus possimus corrupti
              dignissimos distinctio odio quisquam, expedita vel nostrum facilis
              perferendis veritatis repellat doloremque. Distinctio non nulla
              nesciunt doloribus.
            </div>
          </div>
          <div className="tags_container">
            <div className="tags">English</div>
            <div className="tags">language</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
