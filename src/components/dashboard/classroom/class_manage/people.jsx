import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdPersonAddAlt } from "react-icons/md";
import ClassNav from "../classNav";
import { userInfo } from "../../../../services/userService";
import AddPeople from "./addPeople";
import Sidenav from "../../profile/sidenav";
import { getCurrentUser } from "../../../../services/authService";

export default function Poeple() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [showsAddStudent, setShowAddStudent] = useState(false);

  const _class = useLocation().state.classroom;

  useEffect(() => {
    let getPeople = async () => {
      let students = [];
      for (let studentId in _class.students) {
        const student = await userInfo(_class.students[studentId]);
        students.push(student.data);
      }
      setStudents(students);
      let teachers = [];
      for (let teacherId in _class.teachers) {
        const teacher = await userInfo(_class.teachers[teacherId]);
        teachers.push(teacher.data);
      }
      setTeachers(teachers);
    };
    getPeople();
  }, [setStudents, setTeachers, _class]);

  function handleAddTeacher() {
    setShowAddTeacher(!showAddTeacher);
  }
  function handleAddStudent() {
    setShowAddStudent(!showsAddStudent);
  }

  return (
    <React.Fragment>
      <ClassNav {..._class} />
      <main className="people-container">
        <div className="display-teachers">
          <table className="people-table">
            <thead>
              <tr className="info-head">
                <td className="info__title">Teachers</td>
                {_class.author._id === getCurrentUser()._id && (
                  <td className="add-people__icon">
                    <MdPersonAddAlt onClick={handleAddTeacher} />
                  </td>
                )}
              </tr>
              <tr>
                <td className="hr-ruler skin-blue"></td>
              </tr>
            </thead>
            <tbody>
              {teachers &&
                teachers.map((teacher) => {
                  return (
                    <tr className="user-info" key={teacher._id}>
                      <td className="user-data">
                        <span className="sCv5Q asQXV">{teacher.username}</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {showAddTeacher && <AddPeople classroom={_class} people="teacher" />}
        </div>
        <div className="display-teachers">
          <table className="people-table">
            <thead>
              <tr className="info-head">
                <td className="info__title">Students</td>
                {_class.author._id === getCurrentUser()._id && (
                  <td className="add-people__icon">
                    <MdPersonAddAlt onClick={handleAddStudent} />
                  </td>
                )}
              </tr>
              <tr>
                <td className="hr-ruler skin-blue"></td>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((student) => {
                  return (
                    <tr className="user-info" key={student._id}>
                      <td className="user-data">
                        <span className="sCv5Q asQXV">{student.username}</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {showsAddStudent && <AddPeople classroom={_class} people="student" />}
        </div>
      </main>
      <Sidenav />
    </React.Fragment>
  );
}
