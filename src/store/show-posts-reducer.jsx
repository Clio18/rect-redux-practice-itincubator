const SET_POSTS = 'SET_POSTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_POST_COUNT = 'SET_TOTAL_POST_COUNT';
const SET_POSTS_FOR_PAGE = 'SET_POSTS_FOR_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
  posts: [],
  postsForPage: [],
  pageSize: 3,
  totalPostsCount: 0,
  currentPage: 1,
  isFetching: false,
};

export let showPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_POST_COUNT:
      return { ...state, totalPostsCount: action.totalPostsCount };
    case SET_POSTS_FOR_PAGE:
      return { ...state, postsForPage: action.postsForPage };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export let setShowPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export let setPostsForPage = (postsForPage) => {
  return {
    type: SET_POSTS_FOR_PAGE,
    postsForPage,
  };
};

export let setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

export let setTotalPostsCount = (totalPostsCount) => {
  return {
    type: SET_TOTAL_POST_COUNT,
    totalPostsCount,
  };
};

export let setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};
