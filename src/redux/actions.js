// Declare here all the Applications Redux actions
// All action will return an object and are encapsuled in a action creator function
// Is better to send the minimun information in the redux request actions
import {database} from '../database/config'

// Action Creator
export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post})
                       .then(() => { dispatch(addPost(post)) 
        }).catch( error => console.log(error))
    }
}

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts').once('value')
            .then(snapshot => {
                let posts = [];
                snapshot.forEach(childSnapshot => {
                    posts.push(childSnapshot.val());
                })
                dispatch(loadPost(posts));
            })
    }
}

// Redux Action
export function removePost(index) {
    return {
        type: 'remove-post',
        index: index
    }
}

export function addPost(post) {
    return {
        type: 'add-post',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: "add-comment",
        comment,
        postId
    }
}

export function loadPost(posts) {
    return {
        type: 'load-posts',
        posts
    }
}