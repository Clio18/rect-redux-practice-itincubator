const SET_POSTS = "SET_POSTS";

let initialState = {
  newPosts: [],
};

export let showPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, newPosts: [...action.posts] };
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
