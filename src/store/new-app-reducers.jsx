const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [],
  newMessage: "",
};

export let postReducer = (state = initialState, action) => {
  let copyState = { ...state };
  switch (action.type) {
    case UPDATE_MESSAGE:
      let message = action.text;
      copyState.newMessage = message;
      return copyState;
    case SEND_MESSAGE:
      copyState.messages = [...state.messages];
      copyState.messages.push(state.newMessage);
      copyState.newMessage = "";
      return copyState;
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
