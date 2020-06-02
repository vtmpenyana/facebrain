import React from 'react';

const Rank = (props) => {
	return(
		<div className='rank f2'>
			<div className='tc center'>
				<p>{`${props.name}, you are ranked`}</p>
			</div>
			<div className='center'>
				<p className='mt0'>{`#${props.count}`}</p>
			</div>
			<p className='tc f4'> paste a link to an image with a face, this app will detect face in images you provide </p>
		</div>
	)
}

export default Rank;