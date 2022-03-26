import { Link } from "react-router-dom";
function SubjectContainer(params) {
  return (
    <>
      <div className="header_bar subject_bar">
        <div className="header_one subject_bar_header">Subjects</div>
        <div className="header_one">
          <Link to="/popularquestion">Popular questions</Link>
        </div>
      </div>
      <div className="subject_continer">
        <div className="subjects">
          <div className="subject subject1">Mathematics</div>
          <div className="subject subject2">Science</div>
          <div className="subject subject1">Java script</div>
          <div className="subject subject2">C</div>
          <div className="subject subject1">Biology</div>
          <div className="subject subject2">Physics</div>
          <div className="subject subject1">Python</div>
          <div className="subject subject2">Java</div>
        </div>
      </div>
    </>
  );
}
export default SubjectContainer;
