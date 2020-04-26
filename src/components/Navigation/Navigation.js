import React from 'react';
import logo from './logo.png';
import './Navigation.css';



const Navigation = ({isSignedIn, routeChange}) => {
	let action = '';
	if(isSignedIn){
		action = 'Sign Out'
	}
	return(
		<div className='navigation'>
			<div className="Tilt shadow-1 tc" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner"> <img alt='logo' src={logo}/> </div>
			</div>
			<div className='nav underline pointer f3 dim fw5 pa3'>
				<p onClick={() => routeChange('signin')}>{action}</p>
			</div>
		</div>
	)
}

export default Navigation;