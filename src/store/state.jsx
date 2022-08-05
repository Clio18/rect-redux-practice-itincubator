const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    messages: [],
    newMessage: "",
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === UPDATE_MESSAGE) {
      let body = action.text;
      this._state.newMessage = body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      this._state.messages.push(this._state.newMessage);
      this._state.newMessage = "";
      this._callSubscriber(this._state);
    }
  },
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

export default store;
