import React, {Component} from 'react';
import PhotoWall from './photowall'
import AddPhoto from './add_photo'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log(prevState);
        console.log(this.state);
    }

    render() {
        return <div>
                    <h1>
                        <Link to="/"> Photowall </Link>
                    </h1>
                    <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props} />
                    </div>
                    )} />
 
                    <Route path="/add-photo" render={({history}) => (
                        <AddPhoto {...this.props} onHistory={history} />
                    )} /> 
               </div>
    }
}

export default Main;