import React, {Component} from 'react';
import PhotoWall from './photowall'
import AddPhoto from './add_photo'
import {Route, Link} from 'react-router-dom'
import Single from './single'

class Main extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    componentDidMount() {
        this.props.startLoadingPosts();
        this.props.startLoadingComments();
        console.log('componentDidMount');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
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

                    <Route path="/single/:id" render={(params) => (
                        <Single {...this.props} {...params} />
                    )} />
               </div>
    }
}

export default Main;