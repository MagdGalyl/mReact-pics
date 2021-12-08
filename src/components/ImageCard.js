import React from 'react';

class ImageCard extends React.Component {
    render(){
        return (
            <div>
                <img 
                // key={this.props.image.id} 
                src={this.props.image.urls.regular} 
                alt={this.props.image.description}
                />
            </div>
        )
    }
}

export default ImageCard;