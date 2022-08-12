import { setPostsCreator } from "./store/show-posts-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    postsCont: state.postsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowPosts: (posts) => {
      dispatch(setPostsCreator(posts));
    },
  };
}

export const ShowPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
