import _posts from '../data/posts'
import {combineReducers} from 'redux'

function comments(currentState = {}, action) {
    switch (action.type) {
        case 'load-comments': return action.comments;
        case 'add-comment': 
            if (!currentState[action.postId]) {
                return {...currentState, [action.postId]: [action.comment]};
            } else {
                return {...currentState, [action.postId]: [...currentState[action.postId], action.comment]};
            }      
        default: return currentState
    }
}

function posts(currentState = _posts, action) {
     switch(action.type) {
        case 'load-posts': 
            return action.posts;
        case 'remove-post': 
            return [...currentState.slice(0, action.index), ...currentState.slice(action.index +1)]
        case 'add-post': 
            return [...currentState, action.post] 
        default: return currentState
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer;