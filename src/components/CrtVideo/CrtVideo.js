import "./CrtVideo.scss";

export const CrtVideo = ({ itemDetails }) => {
  const { title, image } = itemDetails;

  return (
    <section className="crtVideo__film">
      <video
        controls
        poster={image}
        alt={title}
        className="crtVideo__film-pic"
      />
    </section>
  );
};
