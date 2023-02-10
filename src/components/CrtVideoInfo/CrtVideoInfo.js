import Views from "../../assets/icons/views.svg";
import Likes from "../../assets/icons/likes.svg";
import "./CrtVideoInfo.scss";
import { TimeFormatChange } from "../Comment/Comment";
import React from "react";

export default function CrtVideoInfo({ item }) {
  const { title, channel, description, views, likes, timestamp } = item;

  return (
    <main className="crtVideo">
      <section className="crtVideo__title">
        <h1 className="crtVideo__title--big">{title}</h1>
      </section>
      <section className="crtVideo__details">
        <div className="crtVideo__details__text-wrapper">
          <div className="crtVideo__details-text crtVideo__details-text-L">
            <span className="crtVideo__details-text--bold">By {channel}</span>
          </div>
          <div className="crtVideo__details-text crtVideo__details-text-R">
            <span className="crtVideo__details-text--lighter">
              {TimeFormatChange(timestamp)}
            </span>
          </div>
        </div>
        <div className="crtVideo__details__text-wrapper crtVideo__details__text--right">
          <div className="crtVideo__details-text">
            <div className="crtVideo__details-img__views">
              <img src={Views} />
            </div>
            <span className="crtVideo__details-text--lighter">{views}</span>
          </div>
          <div className="crtVideo__details-text crtVideo__details-text-R">
            <div className="crtVideo__details-img__likes">
              <img src={Likes} />
            </div>
            <span className="crtVideo__details-text--lighter">{likes}</span>
          </div>
        </div>
      </section>
      <section className="crtVideo__description">
        <p className="crt-video__description-text">{description}</p>
      </section>
    </main>
  );
}
