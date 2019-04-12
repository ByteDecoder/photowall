import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Photo extends Component {

    removePhoto = () => this.props.onRemovePhoto(this.props.post);

    render() {
        const post = this.props.post;
        return <figure className="figure">
                    <img className="photo" src={post.imageLink} alt={post.description} />
                    <figcaption><p>{post.description}</p></figcaption>
                    <div className="button-container">
                        <button onClick={this.removePhoto}>Remove</button>
                    </div>
               </figure>
    }

}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;