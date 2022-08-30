import {
  setShowPosts,
  setCurrentPage,
  setPostsForPage,
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

export const ShowPostsContainer = connect(mapStateToProps, {
  setShowPosts,
  setPostsForPage,
  setCurrentPage,
})(AllPostsContainerAPI);
