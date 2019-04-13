import Main from './main' 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps(currentState) {
    return {
        posts: currentState.posts,
        comments: currentState.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

// Here is the binding between redux and the app
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App;
