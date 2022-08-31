import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://post-model-default-rtdb.firebaseio.com/post.json",
});

export const postsDAL = {
  getPosts() {
    return instance.get();
  },
  getShowPosts(startingTime, pageSize) {
    return instance.get(
      `?orderBy="time"&startAt="${startingTime}"&limitToFirst=${pageSize}`
    );
  },
};
