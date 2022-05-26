import React from "react";
import Sidenav from "../../profile/sidenav";
import { useLocation } from "react-router-dom";
import ClassNav from "../classNav";

export default function Stream() {
  const _class = useLocation().state.classroom;

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
          </main>
        </div>
      </div>
      <Sidenav />
    </React.Fragment>
  );
}
