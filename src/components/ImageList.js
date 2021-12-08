import React from 'react';

const ImageList = (props) =>{
    // console.log(props.images)

    //Creating Images Array
    // const images = props.images.map((image) => {
    //     return <img key={image.id} src={image.urls.regular} alt={image.description}/>
    // });
    // Destructured Version
    const images = props.images.map(({id, urls, description}) => {
        return <img key={id} src={urls.regular} alt={description}/>
    }); 

    // Refrencing the images Array
    return <div>{images}</div>;
}

export default ImageList;