import React, { useState } from "react";
import {
  MdOutlineAssignment,
  MdOutlineFileUpload,
  MdLink,
} from "react-icons/md";
import { BiMenuAltLeft, BiPlus, BiImage } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import * as resourceService from "../../../services/resourceService";

const ResourceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [link, setLink] = useState("");

  const [showLinkInp, setShowLinkInp] = useState(false);
  const [showUploadInp, setUploadInp] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    if (input.name === "resource-title") {
      setTitle(input.value);
    } else if (input.name === "resource-description") {
      setDescription(input.value);
    } else if (input.name === "resource-imgUrl") {
      setImgUrl(input.value);
    } else if (input.name === "resource-link") {
      setLink(input.value);
    }
  };

  const doSubmit = async () => {
    try {
      await resourceService.createResource({
        title,
        imgUrl,
        description,
        link,
      });
      window.location = "/resources";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // let errors = { ...this.state.errors };
        // errors.classname = ex.response.data;
        // this.setState({ errors });
        alert("You have entered wrong input");
      }
    }
  };

  return (
    <div className="add-resource">
      <div className="assign-work__main">
        <div className="assign-work__title">
          <MdOutlineAssignment className="resource__icon" />
          <textarea
            className="textarea-modify"
            name="resource-title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
            rows="1"
          >
            Title
          </textarea>
        </div>
        <div className="assign-work__imgUrl">
          <BiImage className="resource__icon" />
          <textarea
            className="textarea-modify"
            name="resource-imgUrl"
            value={imgUrl}
            placeholder="Resource image url (optional)"
            onChange={handleChange}
            rows="1"
          ></textarea>
        </div>
        <div className="assign-work__description">
          <BiMenuAltLeft className="resource__icon" />
          <textarea
            className="textarea-modify"
            name="resource-description"
            value={description}
            placeholder="Description"
            onChange={handleChange}
            rows="7"
          ></textarea>
        </div>
        <div className="classwork-links">
          <MdOutlineFileUpload
            className="link-icon"
            onClick={() => setUploadInp(!showUploadInp)}
          />
          <MdLink
            className="link-icon"
            onClick={() => setShowLinkInp(!showLinkInp)}
          />
          <BsYoutube
            className="link-icon"
            onClick={() => setShowLinkInp(!showLinkInp)}
          />
          <BiPlus
            className="link-icon"
            onClick={() => setShowLinkInp(!showLinkInp)}
          />
          {showLinkInp && (
            <div className="link-div">
              <input
                className="textarea-modify"
                name="resource-link"
                value={link}
                placeholder="resource link"
                onChange={handleChange}
                rows="1"
                type="text"
              />
            </div>
          )}
          {showUploadInp && (
            <div className="link-div">
              <input
                className="textarea-modify upload-file"
                type="file"
                name="resource-link"
              />
            </div>
          )}
        </div>
        <div className="btn-container">
          <button
            className="btn btn-primary create-work__btn"
            onClick={doSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
