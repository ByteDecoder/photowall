// Declare here all the Applications Redux actions
// All action will return an object and are encapsuled in a action creator function
// Is better to send the minimun information in the redux request actions

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