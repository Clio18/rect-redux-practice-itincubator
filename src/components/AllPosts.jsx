import { Link } from "react-router-dom";

let AllPosts = (props) => {
  return (
    <div>
      <div>
        <Link to="/input">Get Back</Link>
      </div>
      <div>
        {props.props.postsCont.newPosts.map((p) => {
          return (
            <ul key={Math.random()}>
              <li key={p.id}>
                {
                  <div>
                    <div style={{ fontWeight: "bold" }}>{p.newTitle}</div>
                    <div>{p.newMessage}</div>
                    <div style={{ fontStyle: "italic", fontWeight: "lighter" }}>
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
  );
};

export default AllPosts;
