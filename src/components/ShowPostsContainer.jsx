import {
  setPostsCreator,
  setPageNumberCreator,
  setPostsForPageCreator,
} from "../store/show-posts-reducer";
import AllPostsContainerAPI from "./AllPostsContainerAPI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    posts: state.postsPage.posts,
    pageSize: state.postsPage.pageSize,
    totalPostsCount: state.postsPage.totalPostsCount,
    currentPage: state.postsPage.currentPage,
    postsForPage: state.postsPage.postsForPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowPosts: (posts) => {
      dispatch(setPostsCreator(posts));
    },
    setPostsForPage: (postsForPage) => {
      dispatch(setPostsForPageCreator(postsForPage));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setPageNumberCreator(pageNumber));
    },
  };
}

export const ShowPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPostsContainerAPI);
