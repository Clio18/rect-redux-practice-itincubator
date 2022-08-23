import React from "react";
import * as axios from "axios";
import AllPosts from "./AllPosts";

class AllPostsContainerAPI extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://post-model-default-rtdb.firebaseio.com/post.json?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        const data = Object.values(res.data);
        this.props.setShowPosts(data);
      });
  }

  onPageChaned(p) {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://post-model-default-rtdb.firebaseio.com/post.json?page=${p}&count=${this.props.pageSize}`
      )
      .then((res) => {
        const data = Object.values(res.data);
        this.props.setShowPosts(data);
      });
  }

  render() {
    let pageCount = Math.ceil(this.props.totalPostsCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <AllPosts
        props={this.props}
        pages={pages}
        currentPage={this.props.currentPage}
        setCurrentPage={this.props.setCurrentPage}
        onPageChaned={this.onPageChaned}
      />
    );
  }
}

export default AllPostsContainerAPI;
