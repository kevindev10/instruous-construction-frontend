import React from 'react';
import './SideNavbar.css';


const SideNavbar = ({close,sideBarOpen,onRouteChange}) => {
	let Classes = 'side-nav-bar';
	if(sideBarOpen){
		Classes = 'side-nav-bar open'
	}
	return(
		<nav className ={Classes}>
			<ul>
				<li onClick = { close}>
					<i className="material-icons">close</i>
				</li>
				<li onClick={() => onRouteChange('home')}>HOME</li>
				<li onClick={() => onRouteChange('about')}>ABOUT
					
				</li>
				<li>CURRENT</li>
				<li>COMPLETED</li>
				<li>TENDERS</li>
				<li>CAREERS</li>
				<li>CONTACT</li>

			</ul>
		</nav>
	)
}

export default SideNavbar;
