import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // console.log(props.images)

    // Creating Images Array //
    // const images = props.images.map((image) => {
    //     return <img key={image.id} src={image.urls.regular} alt={image.description}/>
    // });

    // Destructured Version //
    // const images = props.images.map(({id, urls, description}) => {
    //     return <img key={id} src={urls.regular} alt={description}/>
    // }); 

    // ImageCard Component Edition //
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image= {image}/>;
    });
    // Refrencing the images Array
    return <div className="image-list" >{images}</div>;
    
}

export default ImageList;