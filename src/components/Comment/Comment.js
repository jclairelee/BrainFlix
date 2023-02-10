import "./Comment.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Delete from "../../assets/icons/delete.svg";
import axios from "axios";

export const TimeFormatChange = (timestamp) => {
  const date = new Date(timestamp);
  const formatted =
    date.getMonth() + 1 + "/" + (date.getDate() + 1) + "/" + date.getFullYear();
  return formatted;
};

export default function Comment(props) {
  const { videoId } = useParams();
  const [commentId, setCommentId] = useState([]);

  const deleteURL = `http://localhost:8080/videos/${videoId}/comments/${commentId}`;
  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(deleteURL)
      .then(() => {
        console.log(commentId);
      })
      .catch((err) => console.log(err));
  };

  return props.comments.map((props, index) => {
    return (
      <section className="comment" key={index}>
        <div className="comment-content">
          <div className="comment-contnet__pic-wrapper">
            <div className="comment-content__pic">
              <img src={props.image} />
            </div>
          </div>
          <div className="comment-content-text">
            <div className="comment-content__name-wrapper">
              <p className="comment-content__name">{props.name}</p>
            </div>
            <div className="comment-content__date-wrapper">
              <p className="comment-content__date">
                {TimeFormatChange(props.timestamp)}
              </p>
            </div>
            <div className="comment-content__msg-wrapper">
              <p className="comment-content__msg">{props.comment}</p>
            </div>
            <div className="comment-content__icon-wrapper">
              <img
                src={Delete}
                alt="delete icon"
                className="comment-content__icon"
                onClick={(e) => {
                  console.log(e);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  });
}
