import * as axios from "axios";
import { Link } from "react-router-dom";

let Posts = (props) => {
  if (props.postsCont.newPosts.length === 0) {
    console.log("HERE!");
    axios
      .get("https://post-model-default-rtdb.firebaseio.com/post.json")
      .then((res) => {
        const data = Object.values(res.data);
        props.setShowPosts(data);
      });
  }

  return (
    <div>
      <div>
        <Link to="/input">Get Back</Link>
      </div>
      <div>
        {props.postsCont.newPosts.map((p) => {
          return (
            <ul key={Math.random()}>
              <li key={p.id}>
                {
                  <div>
                    <div>{p.newTitle}</div>
                    <div>{p.newMessage}</div>
                    <div>{p.time}</div>
                  </div>
                }
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
