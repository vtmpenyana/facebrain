import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({urlImage}) => {
    return(
        <div className='tc pa4 center'>
            <img alt='' src={urlImage}/>
        </div>
    )
}

export default FaceDetection;