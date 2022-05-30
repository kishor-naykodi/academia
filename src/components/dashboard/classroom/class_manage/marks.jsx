import React from "react";
import { useLocation } from "react-router-dom";
import ClassNav from "../classNav";
import Sidenav from "../../profile/sidenav";

export default function Marks() {
  const _class = useLocation().state.classroom;

  return (
    <React.Fragment>
      <ClassNav {..._class} />
      <main className="people-container">
        <div className="display-teachers">
          <table className="people-table">
            <thead>
              <tr className="info-head">
                <td className="info__title">Students</td>
              </tr>
              <tr>
                <td className="hr-ruler skin-blue"></td>
              </tr>
            </thead>
            <tbody>
              {_class &&
                _class.students.map((student) => {
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
        </div>
      </main>
      <Sidenav />
    </React.Fragment>
  );
}
