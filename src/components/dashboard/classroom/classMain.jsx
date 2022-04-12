import React, { useState, useEffect } from "react";
import { getClassrooms } from "../../../services/classService";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  MdOutlineFolderOpen,
  MdOutlineAssignmentInd,
  MdOutlineAdd,
  MdOutlineFactCheck,
  MdOutlineTopic,
  MdCalendarToday,
} from "react-icons/md";
import ClassForm from "./classForm";

function ClassMain(props) {
  const [classrooms, setClassroom] = useState([]);
  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getClassrooms();
      setClassroom(result.data);
    };
    fetchData();
  }, []);

  return (
    <main className="main">
      <nav className="class_nav">
        <div className="class-links">
          <div className="nav__link">
            <a href="#">
              <MdOutlineFactCheck className="nav__icon" />
              To do
            </a>
          </div>
          <div className="nav__link">
            <a href="#">
              <MdOutlineTopic className="nav__icon" />
              To review
            </a>
          </div>
          <div className="nav__link">
            <a href="#">
              <MdCalendarToday className="nav__icon" />
              Calendar
            </a>
          </div>
        </div>
        <MdOutlineAdd
          className="add_class"
          onClick={() => {
            setAddClass(!addClass);
          }}
        />
      </nav>
      {addClass && <ClassForm />}
      {!addClass && (
        <div>
          <ol className="block-classes">
            {classrooms.map((classroom) => (
              <li key={classroom._id} className="class">
                <div
                  className="class__header header__img"
                  style={{ backgroundImage: `url(${classroom.imgUrl})` }}
                >
                  <div className="head__content">
                    <h3 className="class__title">
                      <a href="#">
                        <div className="wrap_header class__heading">
                          {`${classroom.classname} [${classroom.subject}]`}
                        </div>
                        <div className="wrap_header text-sm">
                          {classroom.section}
                        </div>
                      </a>
                      <a href="#">
                        <BsThreeDotsVertical />
                      </a>
                    </h3>
                    <span className="class__author text-sm">
                      {classroom.author.name}
                    </span>
                  </div>
                </div>
                <div className="class__body">
                  <img
                    className="profile-image"
                    src="https://lh3.googleusercontent.com/a/default-user=s75-c"
                    alt="profile"
                  />
                </div>
                <div>
                  <footer className="class__footer">
                    <MdOutlineAssignmentInd className="class__icon" />
                    <MdOutlineFolderOpen className="class__icon" />
                  </footer>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </main>
  );
}

export default ClassMain;
