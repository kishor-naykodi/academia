import {Link} from 'react-router-dom'
function Question(params) {
   const id=1;
    return(
        <>
        <div class="header_bar">
        <div class="header_one"><Link to="/subjects">Subjects</Link></div>
        <div class="header_one"><Link to="/popularquestion">Popular questions</Link></div>
        
       </div>
      
      <div class="questions_container_background">
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
            <Link to={`/question/${id}`}><div class="queastion">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              velit architecto dolor voluptatum ullam quaerat reiciendis
              provident, blanditiis ipsa possimus, est perspiciatis! Veniam illo
              sequi incidunt est, non rerum eius.
            </div>
            </Link>
          </div>
          <div class="answer_container">
            <div class="answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              doloribus ab odio ipsa quos accusamus dicta eligendi incidunt
              beatae, similique iure vitae voluptate unde natus ex doloremque
              praesentium reiciendis error. Ducimus possimus corrupti
              dignissimos distinctio odio quisquam, expedita vel nostrum facilis
              perferendis veritatis repellat doloremque. Distinctio non nulla
              nesciunt doloribus.
            </div>
          </div>
          <div class="tags_container">
            <div class="tags">English</div>
            <div class="tags">language</div>
          </div>
        </div>
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
            <Link to={`/question/${id}`}><div class="queastion">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              velit architecto dolor voluptatum ullam quaerat reiciendis
              provident, blanditiis ipsa possimus, est perspiciatis! Veniam illo
              sequi incidunt est, non rerum eius.
            </div>
            </Link>
          </div>
          <div class="answer_container">
            <div class="answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              doloribus ab odio ipsa quos accusamus dicta eligendi incidunt
              beatae, similique iure vitae voluptate unde natus ex doloremque
              praesentium reiciendis error. Ducimus possimus corrupti
              dignissimos distinctio odio quisquam, expedita vel nostrum facilis
              perferendis veritatis repellat doloremque. Distinctio non nulla
              nesciunt doloribus.
            </div>
          </div>
          <div class="tags_container">
            <div class="tags">English</div>
            <div class="tags">language</div>
          </div>
        </div>
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
            <Link to={`/question/${id}`}><div class="queastion">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              velit architecto dolor voluptatum ullam quaerat reiciendis
              provident, blanditiis ipsa possimus, est perspiciatis! Veniam illo
              sequi incidunt est, non rerum eius.
            </div>
            </Link>
          </div>
          <div class="answer_container">
            <div class="answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              doloribus ab odio ipsa quos accusamus dicta eligendi incidunt
              beatae, similique iure vitae voluptate unde natus ex doloremque
              praesentium reiciendis error. Ducimus possimus corrupti
              dignissimos distinctio odio quisquam, expedita vel nostrum facilis
              perferendis veritatis repellat doloremque. Distinctio non nulla
              nesciunt doloribus.
            </div>
          </div>
          <div class="tags_container">
            <div class="tags">English</div>
            <div class="tags">language</div>
          </div>
        </div>
      </div>

</>
    )
    
}

export default Question