import React from 'react';

class ImageCard extends React.Component {
    // Creating React Ref
    constructor(props){
        super(props);

        this.state = {spans: 0 };

        // we assign it to var so we can refer to it later on
        this.imageRef = React.createRef();        
    }

    componentDidMount(){
        // console.log(this.imageRef)
        // console.log(this.imageRef.current.clientHeight)

        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        // this.setState({spans: spans });
        this.setState({spans}); //Refactored cause we got (IDENTICAL key and value NAME)
    }

    render(){
        const {description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                {/* <img 
                // key={this.props.image.id} 
                src={this.props.image.urls.regular} 
                alt={this.props.image.description}
                /> */}

                <img 
                // key={this.props.image.id}
                ref= {this.imageRef} 
                src= {urls.regular} 
                alt= {description}
                />
            </div>
        )
    }
}

export default ImageCard;