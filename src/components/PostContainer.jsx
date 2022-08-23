import {
  updateMessageCreator,
  updateTitleCreator,
  sendMessageCreator,
} from "../store/post-reducers";
import Post from "./Post";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    postCont: state.postPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateMessage: (text) => {
      dispatch(updateMessageCreator(text));
    },

    updateTitle: (text) => {
      dispatch(updateTitleCreator(text));
    },

    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
