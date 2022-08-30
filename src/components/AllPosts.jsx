import { Link } from "react-router-dom";
import classes from "./AllPosts.module.css";

let AllPosts = (props) => {
  let array = props.props.postsForPage;
  if (array.length === 0) {
    array = props.props.posts;
  }

  return (
    <>
      <div>
        <Link to="/input">Get Back</Link>
      </div>
      <div>
        {props.pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? classes.selectedPage : ""}
              onClick={() => {
                props.onPageChaned(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        <div>
          {array.map((p) => {
            return (
              <ul key={Math.random()}>
                <li key={p.id}>
                  {
                    <div>
                      <div style={{ fontWeight: "bold" }}>{p.newTitle}</div>
                      <div>{p.newMessage}</div>
                      <div
                        style={{ fontStyle: "italic", fontWeight: "lighter" }}
                      >
                        {p.time}
                      </div>
                    </div>
                  }
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
