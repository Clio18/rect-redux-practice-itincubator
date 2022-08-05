import classes from "./Post.module.css";
import {
  updateMessageCreator,
  sendMessageCreator,
} from "./store/new-app-reducers";

function Post(props) {
  let updateMessageHandler = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateMessageCreator(body));
  };

  let sendMessageHandler = () => {
    props.store.dispatch(sendMessageCreator());
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.container_header}>Hello</h1>
      <div className={classes.container_workarea}>
        <div className={classes.workarea_textarea}>
          <textarea
            placeholder="Add some message"
            value={props.store._state.post.newMessage}
            onChange={updateMessageHandler}
          />
        </div>
        <div className={classes.workarea_button}>
          <button onClick={sendMessageHandler}>Send</button>
        </div>
        <div>
          <ul className={classes.workarea_list}>
            {props.store._state.post.messages.map((el) => (
              <li className={classes.list_item}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
