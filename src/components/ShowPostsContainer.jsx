import {
  setShowPosts,
  setCurrentPage,
  setPostsForPage,
  setTotalPostsCount,
  setIsFetching,
} from '../store/show-posts-reducer';
import AllPostsContainerAPI from './AllPostsContainerAPI';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    posts: state.postsPage.posts,
    pageSize: state.postsPage.pageSize,
    totalPostsCount: state.postsPage.totalPostsCount,
    currentPage: state.postsPage.currentPage,
    postsForPage: state.postsPage.postsForPage,
    isFetching: state.postsPage.isFetching,
  };
}

export const ShowPostsContainer = connect(mapStateToProps, {
  setShowPosts,
  setPostsForPage,
  setCurrentPage,
  setTotalPostsCount,
  setIsFetching,
})(AllPostsContainerAPI);
