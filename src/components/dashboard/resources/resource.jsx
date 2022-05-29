import React, { useEffect, useState } from "react";
import { getResources } from "../../../services/resourceService";
import ClassNav from "../classroom/classNav";
import Sidenav from "../profile/sidenav";
import ResourceForm from "./resourceForm";

function Resource() {
  const [resources, setResources] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resources = await getResources();
      setResources(resources.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ClassNav />
      <main className="resource-main">
        <div>
          {!showForm &&
            resources.map((resource) => {
              return (
                <div className="resource-block">
                  <div className="resource-imgBlock">
                    <img
                      className="resource-img"
                      src={resource.imgUrl}
                      alt="resource-img"
                    />
                  </div>
                  <div className="resource-info">
                    <p className="z3vRcc resource-title">{resource.title}</p>
                    <p className="asQXV">{resource.description}</p>
                  </div>
                </div>
              );
            })}
          {showForm && (
            <div className="resource-container">
              <div
                className="resource-hide"
                onClick={() => setShowForm(!showForm)}
              ></div>
              <ResourceForm />
            </div>
          )}
          <button
            className="btn btn-primary "
            onClick={() => setShowForm(!showForm)}
          >
            Create Resource
          </button>
        </div>
      </main>

      <Sidenav />
    </div>
  );
}

export default Resource;
