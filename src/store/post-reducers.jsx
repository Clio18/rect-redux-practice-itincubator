const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const UPDATE_TITLE = 'UPDATE_TITLE';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  newPost: {
    id: '',
    newTitle: '',
    newMessage: '',
  },
};

export let postReducer = (state = initialState, action) => {
  let copyState = { ...state };
  switch (action.type) {
    case UPDATE_MESSAGE:
      let message = action.text;
      copyState.newPost.newMessage = message;
      return copyState;
    case UPDATE_TITLE:
      let title = action.text;
      copyState.newPost.newTitle = title;
      return copyState;
    case SEND_MESSAGE:
      var today = new Date();
      var time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

      const axios = require('axios').default;
      axios({
        method: 'post',
        url: 'https://post-model-default-rtdb.firebaseio.com/post.json',
        data: {
          id: Math.floor(Math.random() * 1000000000 + 1),
          newMessage: copyState.newPost.newMessage,
          newTitle: copyState.newPost.newTitle,
          time: time,
        },
      });

      copyState.newPost.newMessage = '';
      copyState.newPost.newTitle = '';
      return copyState;
    default:
      return copyState;
  }
};

export let updateMessageCreator = (newText) => {
  return {
    type: UPDATE_MESSAGE,
    text: newText,
  };
};

export let updateTitleCreator = (newText) => {
  return {
    type: UPDATE_TITLE,
    text: newText,
  };
};

export let sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
