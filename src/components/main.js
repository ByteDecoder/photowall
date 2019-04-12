import React, {Component} from 'react';
import Title from './title'
import PhotoWall from './photowall'
import AddPhoto from './add_photo'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState(state => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }));
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat(postSubmitted)
        }));
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
        console.log(this.props.posts);
        console.log('render');
        return <div>
                    <Route exact path="/" render={() => (
                    <div>
                        <Title taskTitle={'Photowall'}/>
                        {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} /> */}
                    </div>
                    )} />

                    {/* <Route path="/add-photo" render={({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                          this.addPhoto(addedPost);  
                          history.push('/');
                        }} />
                    )} /> */}
               </div>
    }
}

export default Main;