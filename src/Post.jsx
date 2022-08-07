import classes from "./Post.module.css";

function Post(props) {
  const updateMessageHandler = (event) => {
    let body = event.target.value;
    props.updateMessage(body);
  };

  const sendMessageHandler = () => {
    props.sendMessage();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.container_header}>Hello</h1>
      <div className={classes.container_workarea}>
        <div className={classes.workarea_textarea}>
          <textarea
            placeholder="Add some message"
            value={props.newMessage}
            onChange={updateMessageHandler}
          />
        </div>
        <div className={classes.workarea_button}>
          <button onClick={sendMessageHandler}>Send</button>
        </div>
        <div>
          <ul className={classes.workarea_list}>
            {props.messages.map((el) => (
              <li className={classes.list_item}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
