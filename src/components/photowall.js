import React, {Component} from 'react';
import Photo from './photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PhotoWall extends Component {
    render() {
        return <div>
                    <Link className="add-icon" to="/add-photo"> + </Link>
                    <div className="photo-grid">
                        {this.props.posts
                             .sort((x,y) => y.id - x.id)
                             .map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
                    </div>
                </div>
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;