import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { CrtVideo } from "../../components/CrtVideo/CrtVideo";
import NextVideo from "../../components/NextVideo/NextVideo";
import Comment from "../../components/Comment/Comment";
import CrtVideoInfo from "../../components/CrtVideoInfo/CrtVideoInfo";
import NewComment from "../../components/NewComment/NewComment";
import "./Home.scss";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

const SEARCH_URL = `http://localhost:8080/videos/`;

export default function Home() {
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});

  const getVideoDetails = async () =>
    axios
      .get(`http://localhost:8080/videos/${videoId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: isValidInputTimeValue,
        }),
      })
      .then((res) => {
        setVideoDetails(res.data);
      })
      .catch((error) => console.log(error));

  const getVideos = async () => {
    try {
      const response = await axios.get(SEARCH_URL);
      setVideo(response.data.filter((video) => video.id !== videoId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
    getVideoDetails();
  }, [videoId, videoDetails]);

  return (
    <main className="App">
      <section className="AppUpper">
        <Header />
        <CrtVideo
          key={videoDetails}
          itemDetails={videoDetails && videoDetails}
        />
      </section>

      <section className="AppBottom">
        <div className="AppBottom__left">
          <div className="AppBottom__mainContent">
            <CrtVideoInfo
              key={videoDetails}
              item={videoDetails && videoDetails}
            />
            {videoDetails.comments && (
              <NewComment
                videoDetails={videoDetails}
                newComments={getVideoDetails}
              />
            )}
            {videoDetails.comments && (
              <Comment comments={videoDetails.comments} videoId={videoId} />
            )}
          </div>
        </div>

        <div className="AppBottom__right">
          <NextVideo video={video && video} />
        </div>
      </section>
    </main>
  );
}
