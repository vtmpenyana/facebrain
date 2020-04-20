import React from 'react';
import './ImageLinkInput.css';

const ImageLinkInput = () => {
	return(
		<div className='linkInput w-70 pa3 center'>
			<input className='w-60 pa2' type='text' placeholder='paste url here'/>
			<button className='pointer w-10-ns w-20-m w-20-l f4 white grow bg-light-purple'>Detect</button>
		</div>
	)
}

export default ImageLinkInput;