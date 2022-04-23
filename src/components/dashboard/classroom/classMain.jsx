import React, { useState, useEffect } from "react";
import { getClassrooms } from "../../../services/classService";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineFolderOpen, MdOutlineAssignmentInd } from "react-icons/md";
import { Link } from "react-router-dom";

function ClassMain(props) {
  const [classrooms, setClassroom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const classrooms = await getClassrooms();
      setClassroom(classrooms);
    };

    fetchData();
  }, []);

  return (
    <main className="main">
      <div id="main-class" className="class-container">
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
                      <Link to="#">
                        <div className="wrap_header class__heading">
                          {`${classroom.classname} [${classroom.subject}]`}
                        </div>
                        <div className="wrap_header text-sm">
                          {classroom.section}
                        </div>
                      </Link>
                      <Link to="#">
                        <BsThreeDotsVertical />
                      </Link>
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
      </div>
    </main>
  );
}

export default ClassMain;
