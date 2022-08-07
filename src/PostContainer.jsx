import {
  updateMessageCreator,
  sendMessageCreator,
} from "./store/new-app-reducers";
import Post from "./Post";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    newMessage: state.post.newMessage,
    messages: state.post.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateMessage: (text) => {
      dispatch(updateMessageCreator(text));
    },

    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
