import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import "./Upload.scss";
import publish from "../../assets/icons/publish.svg";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Upload() {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    const postVideo = {
      title,
      description,
      date: new Date().toLocaleString(),
      id: uuidv4(),
    };
    e.preventDefault();
    axios
      .post("http://localhost:8080/videos/", postVideo)
      .then(alert("The video has been successfully uploaded!"))
      .then(navigation("/"));
  };

  return (
    <>
      <Header />
      <section className="upload">
        <div className="upload-title">
          <h1 className="upload-title__text">Upload Video</h1>
        </div>
        <form
          className="upload-content-form"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="upload-content">
            <div className="upload-content-left">
              <label className="box-label">VIDEO THUMBNAIL</label>
              <div className="upload-content-left__img"></div>
            </div>
            <div className="upload-content-right">
              <div className="upload-content-right__top">
                <label htmlFor="video-title" className="box-label">
                  TITLE YOUR VIDEO
                </label>
                <input
                  placeholder="Add a title to your video"
                  type="text"
                  name="video-title"
                  className="box-input box-input__title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="upload-content-right__bottom">
                <label htmlFor="video-description" className="box-label">
                  ADD A VIDEO DESCRIPTION
                </label>
                <input
                  placeholder="Add a description to your video"
                  type="text"
                  name="video-description"
                  className="box-input box-input__detail"
                  id="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="btn-wrapper">
              <button className="btn">
                <img src={publish} className="btn-icon" alt="plus-icon" />{" "}
                PUBLISH
              </button>
            </div>
            <div className="btn-cancel-wrapper">
              <button
                className="btn-cancel"
                onClick={() => {
                  navigation("/");
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
