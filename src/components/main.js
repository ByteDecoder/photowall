import React, {Component} from 'react';
import Title from './title'
import PhotoWall from './photowall'
import AddPhoto from './add_photo'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
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
        const data = simulateFetchFromDatabase();
        this.setState({
            posts: data
        });
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
        console.log('render');
        console.log(this.state.posts);
        return <div>
                    <Route exact path="/" render={() => (
                    <div>
                        <Title taskTitle={'Photowall'}/>
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
                    </div>
                    )} />

                    <Route path="/add-photo" render={({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                          this.addPhoto(addedPost);  
                          history.push('/');
                        }} />
                    )} />
               </div>
    }
}

function simulateFetchFromDatabase() {
    return [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-europeanbest-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
            }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://images.unsplash.com/photo-1485780974122-c91bb5dcf725?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
            }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }];
}

export default Main;