import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({urlImage, box}) => {
    return(
        <div className='center ma'>
            <div className='abs mt2'>
                <img id='linkImage' alt='' src={urlImage}/>
                <div className='bounding-box' style={{top: box.top, left:box.left, right: box.right, bottom: box.bottom}}></div>
            </div>
        </div>
    )
}

export default FaceDetection;