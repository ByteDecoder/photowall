import React, {Component} from 'react';

class Photo extends Component {

    removePhoto = () => this.props.onRemovePhoto(this.props.post);

    render() {
        const post = this.props.post;
        return <figure className="figure">
                    <img className="photo" src={post.imageLink} alt={post.description} />
                    <figcaption><p>{post.description}</p></figcaption>
                    <div className="button-container">
                        <button className="remove-button" onClick={this.removePhoto}>Remove</button>
                    </div>
               </figure>
    }

}

export default Photo;