import {
  updateMessageCreator,
  sendMessageCreator,
} from "./store/new-app-reducers";
import Post from "./Post";
import StoreContext from "./StoreContext";

function PostContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onUpdateMessage = (text) => {
          store.dispatch(updateMessageCreator(text));
        };

        let onSendMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        return (
          <Post
            updateMessageFromContainer={onUpdateMessage}
            sendMessageFromContainer={onSendMessage}
            newMessageFromContainer={state.post.newMessage}
            messagesFromContainer={state.post.messages}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default PostContainer;
