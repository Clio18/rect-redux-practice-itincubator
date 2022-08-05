import {
  updateMessageCreator,
  sendMessageCreator,
} from "./store/new-app-reducers";
import Post from "./Post";

function PostContainer(props) {
  let onUpdateMessage = (text) => {
    props.store.dispatch(updateMessageCreator(text));
  };

  let onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let state = props.store.getState();

  return (
    <Post
      updateMessageFromContainer={onUpdateMessage}
      sendMessageFromContainer={onSendMessage}
      newMessageFromContainer={state.post.newMessage}
      messagesFromContainer={state.post.messages}
    />
  );
}

export default PostContainer;
