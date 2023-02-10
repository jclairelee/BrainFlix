import plusIcon from "../../assets/icons/add_comment.svg";
import { useState } from "react";
import axios from "axios";
import "./NewComment.scss";
import { v4 as uuidv4 } from "uuid";

export default function NewComment({ videoDetails, newComments }) {
  const name = "Claire";
  const [comment, setComment] = useState("");
  const postComment = {
    id: uuidv4(),
    name: name,
    comment: comment,
    likes: 0,
    timestamp: new Date().toLocaleString(),
  };
  const { id, comments } = videoDetails;

  const URL = `http://localhost:8080/videos/${id}/comments`;

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(URL, postComment)
      .then(() => {
        newComments();
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <section className="newComment">
      <div className="newComment-content">
        <div className="newComment-content__header">
          <h4>{comments.length} Comments</h4>
        </div>
        <div className="newComment-content__new-comment">
          <div className="newComment__pic">
            <div className="newComment__pic-img"></div>
          </div>
          <div className="newComment-content__cmt">
            <div className="newComment-content__cmt-title">
              <h5 className="newComment-content__cmt-title">
                JOIN THE CONVERSATION
              </h5>
            </div>

            <div className="newComment-content__cmt-newComment">
              <form className="newComment-field" onSubmit={submitHandler}>
                <div className="newComment-content__cmt-msg">
                  <input
                    type="text"
                    placeholder="Add a new comment"
                    className="newComment-content__cmt-msg-textarea "
                    id="comment-textarea"
                    onChange={(e) => {
                      setComment(e.currentTarget.value);
                    }}
                  ></input>
                </div>

                <div className="newComment-content__btn-wrapper">
                  <button className="newComment-content__btn">
                    <img
                      src={plusIcon}
                      className="newComment-content__btn-icon"
                      alt="plus-icon"
                    />
                    COMMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
