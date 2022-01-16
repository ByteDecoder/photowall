// Declare here all the Applications Redux actions
// All action will return an object and are encapsuled in a action creator function
// Is better to send the minimun information in the redux request actions
import { database } from "../database/config";
import Post from "../Models/post";

// Action Creator
export function startAddingPost(post: Post) {
  return (dispatch) => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error: any) => console.log(error));
  };
}

export function startLoadingPosts() {
  return (dispatch) => {
    return database
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        let posts: Post[] = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPost(posts));
      });
  };
}

export function startRemovingPost(index: number, id: number) {
  return (dispatch) => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => dispatch(removePost(index)));
  };
}

export function startAddingComment(comment: string, postId: number) {
  return (dispatch) => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => dispatch(addComment(comment, postId)));
  };
}

export function startLoadingComments() {
  return (disptach) => {
    return database
      .ref("comments")
      .once("value")
      .then((snapshot) => {
        let comments = {};
        snapshot.forEach((childSnapshot) => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        disptach(loadComments(comments));
      });
  };
}

// Redux Action
export function removePost(index: number) {
  return {
    type: "remove-post",
    index: index,
  };
}

export function addPost(post: Post) {
  return {
    type: "add-post",
    post,
  };
}

export function addComment(comment: string, postId: number) {
  return {
    type: "add-comment",
    comment,
    postId,
  };
}

export function loadPost(posts: Post) {
  return {
    type: "load-posts",
    posts,
  };
}

export function loadComments(comments) {
  return {
    type: "load-comments",
    comments,
  };
}
