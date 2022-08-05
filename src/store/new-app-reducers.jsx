const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

export let postReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      let body = action.text;
      state.newMessage = body;
      return state;
    case SEND_MESSAGE:
      state.messages.push(state.newMessage);
      state.newMessage = "";
      return state;
    default:
      return state;
  }
};

export let updateMessageCreator = (newText) => {
  return {
    type: UPDATE_MESSAGE,
    text: newText,
  };
};

export let sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
