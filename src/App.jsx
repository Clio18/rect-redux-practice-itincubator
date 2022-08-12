import { PostContainer } from "./PostContainer";
import { ShowPostsContainer } from "./ShowPostsContainer";
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
