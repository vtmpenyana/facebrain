import React from 'react';
import logo from './logo.png';
import './Navigation.css';
import Tilt from 'react-tilt'

const Navigation = () => {
	return(
		<div className='navigation'>
			<Tilt className="Tilt shadow-1 tc" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner"> <img alt='logo' src={logo}/> </div>
			</Tilt>
			<div className='nav underline pointer f3 dim fw5 pa3'>
				<p>Sign Out</p>
			</div>
		</div>
	)
}

export default Navigation;