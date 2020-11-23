import React from 'react';
import './Navigation.css'



const Navigation = ({open ,onRouteChange}) =>{
	return(
			<nav className='nav-bar o-90'>
				<div className='nav-icon' onClick ={open}>
					<i className="material-icons">menu</i>
				</div>
				<div className='nav-logo f2'>
					Instruous Construction
				</div>
				<div className='nav-space' />
				<div className='nav-items'>
					<ul className='f3'>
						<li onClick={() => onRouteChange('home')}>HOME</li>
						<li onClick={() => onRouteChange('about')}>ABOUT</li>
						<li>CURRENT</li>
						<li>COMPLETED</li>
						<li>TENDERS</li>
						<li>CAREERS</li>
						<li>CONTACT</li>
						
						
					</ul>
				</div>
			</nav>
		)
}

export default Navigation;