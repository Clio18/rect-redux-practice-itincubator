const SET_POSTS = "SET_POSTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
  posts: [],
  pageSize: 3,
  totalPostsCount: 10,
  currentPage: 1,
};

export let showPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
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

export let setPageNumberCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
