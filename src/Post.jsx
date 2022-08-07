import classes from "./Post.module.css";

function Post(props) {
  let updateMessageHandler = (event) => {
    let body = event.target.value;
    props.updateMessageFromContainer(body);
  };

  let sendMessageHandler = () => {
    props.sendMessageFromContainer();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.container_header}>Hello</h1>
      <div className={classes.container_workarea}>
        <div className={classes.workarea_textarea}>
          <textarea
            placeholder="Add some message"
            value={props.newMessageFromContainer}
            onChange={updateMessageHandler}
          />
        </div>
        <div className={classes.workarea_button}>
          <button onClick={sendMessageHandler}>Send</button>
        </div>
        <div>
          <ul className={classes.workarea_list}>
            {props.messagesFromContainer.map((el) => (
              <li className={classes.list_item}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
