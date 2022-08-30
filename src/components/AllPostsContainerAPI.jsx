import React from "react";
import * as axios from "axios";
import AllPosts from "./AllPosts";
import Loader from "./Loader";

class AllPostsContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(`https://post-model-default-rtdb.firebaseio.com/post.json?`)
      .then((res) => {
        const data = Object.values(res.data);
        this.props.setIsFetching(false);
        this.props.setShowPosts(data);
        this.props.setTotalPostsCount(data.length);
      });
  }

  onPageChaned(p) {
    this.props.setCurrentPage(p);
    this.props.setIsFetching(true);

    let pageSize = this.props.pageSize;
    let index = (p - 1) * pageSize;
    let startingTime = this.props.posts[index].time;

    axios
      .get(
        `https://post-model-default-rtdb.firebaseio.com/post.json?orderBy="time"&startAt="${startingTime}"&limitToFirst=${pageSize}`
      )
      .then((res) => {
        this.props.setIsFetching(false);
        const data = Object.values(res.data);
        this.props.setPostsForPage(data);
      });
  }

  render() {
    let pageCount = Math.ceil(this.props.totalPostsCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <AllPosts
            props={this.props}
            pages={pages}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            onPageChaned={this.onPageChaned}
          />
        )}
      </>
    );
  }
}

export default AllPostsContainerAPI;
