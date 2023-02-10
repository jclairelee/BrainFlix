import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Upload from "./Page/Upload/Upload";
import Home from "./Page/Home/Home";

export default function App() {
  //default main video that user sees first
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`videos/${defaultVideoId}`} />}
          />
          <Route path="videos/:videoId" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route
            path="*"
            element={<Navigate to={`videos/${defaultVideoId}`} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
