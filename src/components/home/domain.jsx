import React from "react";

class Domain extends React.Component {
  render() {
    return (
      <section data-aos="fade-up" className="block container block-courses">
        <header className="block__header">
          <h2 className="heading__dark">Start your Engineering journey...</h2>
          <p>Search your favorite courses here.</p>
        </header>
        <div className="input-group">
          <input
            type="text"
            className="input"
            placeholder="Enter course name here..."
          />
          <button className="btn btn--accent">
            <svg className="icon icon--white">
              <use href="images/sprite.svg#search"></use>
            </svg>
            Search
          </button>
        </div>
        <ul className="list block-course__names">
          <li>
            <span className="badge badge--secondary">Python</span>
          </li>
          <li>Java</li>
          <li>Data Structure</li>
          <li>Web Development</li>
          <li>Database</li>
        </ul>
      </section>
    );
  }
}

export default Domain;
