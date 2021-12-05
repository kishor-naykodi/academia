import {Link} from 'react-router-dom'
function SubjectContainer(params) {

    return(

        <>
        <div class="header_bar subject_bar">
        <div class="header_one subject_bar_header">Subjects</div>
        <div class="header_one"><Link to="/popularquestion">Popular questions</Link></div>
      </div>
      <div class="subject_continer">
        <div class="subjects">
          <div class="subject subject1">Mathematics</div>
          <div class="subject subject2">Science</div>
          <div class="subject subject1">Java script</div>
          <div class="subject subject2">C</div>
          <div class="subject subject1">Biology</div>
          <div class="subject subject2">Physics</div>
          <div class="subject subject1">Python</div>
          <div class="subject subject2">Java</div>
        </div>
      </div>
      </>
    )

}
export default SubjectContainer;