import React from 'react';
import './SideNavbar.css';


const SideNavbar = ({close,sideBarOpen}) => {
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
				<li>HOME</li>
				<li>ABOUT
					
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
