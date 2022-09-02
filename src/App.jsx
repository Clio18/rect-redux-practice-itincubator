import { Routes, Route } from 'react-router-dom';
import { PostContainer } from './components/PostContainer';
import { ShowPostsContainer } from './components/ShowPostsContainer';

const App = function () {
  return (
    <Routes>
      <Route path="/input" element={<PostContainer />} />;
      <Route path="/posts" element={<ShowPostsContainer />} />;
    </Routes>
  );
};

export default App;
