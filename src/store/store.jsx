import { postReducer } from './new-app-reducers';

let store = {
  _state: {
    post: {
      messages: [],
      newMessage: '',
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.post = postReducer(this._state.post, action);
    this._callSubscriber(this._state);
  },
};

export default store;
