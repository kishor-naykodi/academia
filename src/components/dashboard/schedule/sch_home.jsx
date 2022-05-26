import React, { useEffect, useState } from "react";
import { getTodaysClasses } from "../../../services/instituteService";
import ClassNav from "../classroom/classNav";
import Sidenav from "../profile/sidenav";
// import SchForm from "./sch_form";

export default function SchHome() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const classes = await getTodaysClasses();
      setClasses(classes.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ClassNav />
      <main style={{ margin: "100px" }}>
        <h1 className="schedule__title">Todays Classes</h1>
        <div className="hr-ruler skin-blue"></div>

        <table className="schedule-table">
          <thead className="schedule__head">
            <tr className="head-row">
              <th>Subject</th>
              <th>Start time</th>
              <th>Meet link</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody className="schedule__body">
            {classes &&
              classes.map((_class) => {
                return (
                  <tr className="sch-row" key={_class.subject}>
                    <td className="sch-data">{_class.subject}</td>
                    <td className="sch-data">{_class.start_time}</td>
                    <td className="sch-data">
                      <a
                        className="sch-link"
                        href={_class.class_link}
                        target="_blank"
                      >
                        {_class.class_link}
                      </a>
                    </td>
                    <td className="sch-data">{_class.teacher}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </main>
      <Sidenav />
    </div>
  );
}
