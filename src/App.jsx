import { PostContainer } from "./components/PostContainer";
import { ShowPostsContainer } from "./components/ShowPostsContainer";
import { Routes, Route } from "react-router-dom";

let App = (props) => {
  return (
    <Routes>
      <Route path="/input" element={<PostContainer />} />;
      <Route path="/posts" element={<ShowPostsContainer />} />;
    </Routes>
  );
};

export default App;
