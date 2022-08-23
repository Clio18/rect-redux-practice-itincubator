import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post(props) {
  const updateMessageHandler = (event) => {
    let body = event.target.value;
    props.updateMessage(body);
  };

  const updateTitleHandler = (event) => {
    let body = event.target.value;
    props.updateTitle(body);
  };

  const sendMessageHandler = () => {
    props.sendMessage();
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.container_header}>Hello</h1>
      <div className={classes.container_workarea}>
        <div className={classes.workarea_input}>
          <input
            type="text"
            placeholder="Title"
            value={props.postCont.newPost.newTitle}
            onChange={updateTitleHandler}
          />
        </div>
        <div className={classes.workarea_textarea}>
          <textarea
            placeholder="Add some message"
            value={props.postCont.newPost.newMessage}
            onChange={updateMessageHandler}
          />
        </div>
        <div className={classes.workarea_button}>
          <button onClick={sendMessageHandler}>Send</button>
        </div>
        <div className={classes.workarea_link}>
          <Link to="/posts" style={{ textDecoration: "none" }}>
            Show all posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
