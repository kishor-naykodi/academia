import React, { useState } from "react";
import {
  MdOutlineAdd,
  MdOutlineFactCheck,
  MdOutlineTopic,
  MdCalendarToday,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function ClassNav(props) {
  const [showOptions, setShowOptions] = useState(false);

  function handleShowOptions() {
    setShowOptions(!showOptions);
  }

  return (
    <nav className="class_nav">
      <div className="class-links">
        <div className="nav__link">
          <Link to="#">
            <MdOutlineFactCheck className="nav__icon" />
            To do
          </Link>
        </div>
        <div className="nav__link">
          <Link to="#">
            <MdOutlineTopic className="nav__icon" />
            To review
          </Link>
        </div>
        <div className="nav__link">
          <Link to="#">
            <MdCalendarToday className="nav__icon" />
            Calendar
          </Link>
        </div>
      </div>

      <MdOutlineAdd className="add_class" onClick={handleShowOptions} />
      {showOptions && (
        <div className="create_new">
          <ul className="create__list">
            <li>
              <Link className="class-link" to="/classroom/create">
                Create Class
              </Link>
            </li>
            <li>
              <Link className="class-link" to="/classroom/join">
                Join Class
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
