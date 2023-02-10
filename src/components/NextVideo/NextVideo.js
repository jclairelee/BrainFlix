import "./NextVideo.scss";
import { Link } from "react-router-dom";

export default function NextVideo({ video }) {
  return (
    <aside className="nextVideo">
      <div className="nextVideo-title-wrapper">
        <h3 className="nextVideo__title">NEXT VIDEOS</h3>
      </div>
      {video.map((video) => (
        <div className="nextVideo__content" key={video.id}>
          <div className="nextVideo__img-wrapper">
            <Link to={`/videos/${video.id}`}>
              <img
                className="nextVideo__img"
                src={video.image}
                alt={video.name}
              />
            </Link>
          </div>
          <div className="nextVideo__text">
            <div className=" nextVideo__text-wrapper-title">
              <span className="nextVideo__text-title">{video.title}</span>
            </div>
            <div className="nextVideo__text-wrapper-channel">
              <span className="nextVideo__text-channel">{video.channel}</span>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
