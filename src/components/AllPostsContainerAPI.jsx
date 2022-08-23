import React from "react";
import * as axios from "axios";
import AllPosts from "./AllPosts";

class AllPostsContainerAPI extends React.Component {
  componentDidMount() {
    axios
      .get("https://post-model-default-rtdb.firebaseio.com/post.json")
      .then((res) => {
        const data = Object.values(res.data);
        this.props.setShowPosts(data);
      });
  }

  render() {
    return <AllPosts props={this.props} />;
  }
}

export default AllPostsContainerAPI;
