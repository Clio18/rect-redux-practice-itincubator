const SET_POSTS = "SET_POSTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_POSTS_FOR_PAGE = "SET_POSTS_FOR_PAGE";

let initialState = {
  posts: [],

  postsForPage: [],

  pageSize: 3,
  totalPostsCount: 13,
  currentPage: 1,
};

export let showPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_POSTS_FOR_PAGE:
      return { ...state, postsForPage: action.postsForPage };
    default:
      return state;
  }
};

export let setPostsCreator = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export let setPostsForPageCreator = (postsForPage) => {
  return {
    type: SET_POSTS_FOR_PAGE,
    postsForPage,
  };
};

export let setPageNumberCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
