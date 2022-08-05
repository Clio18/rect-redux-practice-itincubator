const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [],
  newMessage: "",
};

export let postReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      state.newMessage = action.text;
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
