import React, { useEffect, useState } from "react";
import Sidenav from "../../profile/sidenav";
import { Link, useLocation } from "react-router-dom";
import ClassNav from "../classNav";
import * as classService from "../../../../services/classService";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Stream() {
  const [assignments, setAssignments] = useState();
  const [file, setFile] = useState();
  const _class = useLocation().state.classroom;

  useEffect(() => {
    const fetchData = async () => {
      const assignments = await classService.getAssignments(_class._id);
      setAssignments(assignments.data);
    };

    fetchData();
  }, [_class._id]);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(assignments);
  return (
    <React.Fragment>
      <ClassNav {..._class} />
      <div className="stream-container">
        <div
          className="stream__image"
          style={{ backgroundImage: `url(${_class.imgUrl})` }}
        >
          <div className="stream__heading">
            <h2 className="stream__title">{`${_class.classname} [${_class.section}]`}</h2>
          </div>
        </div>

        <div className="stream__content">
          <aside className="stream__aside">
            <div>
              <div className="class-code stream-block">
                <div className="block-item">
                  <h2 className="block-title">Class code</h2>
                </div>
                <div className="block-item">
                  <div className="class-code z3vRcc">{_class.code}</div>
                </div>
              </div>
              <div className="upcoming  stream-block">
                <h2 className="block-title">Upcoming</h2>
                <div>
                  <div className="block-text">No work due in soon</div>
                </div>
              </div>
            </div>
          </aside>
          <main className="stream__main">
            <div className="stream__input">
              <div className="announce">Announce something to your class</div>
            </div>
            <div className="stream-block stream__data">
              <div>
                <p className="z3vRcc">
                  This is where you can talk to your class
                </p>
                <p className="asQXV">
                  Use the stream to share announcements, post assignments and
                  respond to student questions
                </p>
              </div>
            </div>

            {assignments &&
              assignments.map((assignment) => (
                <Link
                  to={`/classroom/stream/${_class.code}/submit_work`}
                  state={assignment}
                >
                  <div
                    className="stream-block stream__data asn_main"
                    key={assignment._id}
                  >
                    <div className="asn-brand">
                      <div className="asn-head">
                        <img
                          className="tnyRnb"
                          src="//lh3.googleusercontent.com/a/default-user=s40-c"
                          alt="profile-img"
                        />
                        <div>
                          <h1 className="tLDEHd">{assignment.username}</h1>
                          <span className="dDKhVc">
                            {assignment.due_date.substr(0, 10)}
                          </span>
                        </div>
                      </div>
                      <Link to="#" className="asn__options">
                        <BsThreeDotsVertical />
                      </Link>
                    </div>
                    <div>
                      <p className="z3vRcc mg1x">{assignment.title}</p>
                      <p className="asQXV mg1x">{assignment.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </main>
        </div>
      </div>
      <Sidenav />
    </React.Fragment>
  );
}
