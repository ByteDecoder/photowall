import posts from '../data/posts'

const postReducer =  function posts(currentState = posts, action) {
    console.log(action);

    switch(action.type) {
        case 'remove-post': 
            return [...currentState.slice(0, action.index), ...currentState.slice(action.index +1)]
        case 'add-post': 
            return [...currentState, action.post] 
        default: return currentState
    }
}

export default postReducer;