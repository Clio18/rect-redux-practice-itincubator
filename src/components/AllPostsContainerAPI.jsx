import React from 'react';
import AllPosts from './AllPosts';
import Loader from './Loader';
import { postsDAL } from '../api/apiDAL';

class AllPostsContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);

    postsDAL.getPosts().then((res) => {
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

    postsDAL.getShowPosts(startingTime, pageSize).then((res) => {
      const data = Object.values(res.data);
      this.props.setIsFetching(false);
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
