import Main from './main' 
import {connect} from 'react-redux'

function mapStateToProps(currentState) {
    return {
        posts: currentState
    }
}

// Here is the binding between redux and the app
const App = connect(mapStateToProps)(Main)

export default App;
