import React from 'react';
import './SideNavbar.css';


const SideNavbar = ({close,sideBarOpen,onRouteChange}) => {
	let Classes = 'side-nav-bar';
	if(sideBarOpen){
		Classes = 'side-nav-bar open'
	}

	function myFunction() {
	  document.getElementById("myDropdown").classList.toggle("show");
	  
	}

	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}

	
	return(
		<nav className ={Classes}>
			<ul>
				<li onClick = { close}><i className="material-icons">close</i></li>

				<div>
					<li className='f5 dropbtn' onClick={() => onRouteChange('home')}>HOME</li>
				</div>
				
				
				<div className='dropdown'>
					<li  onclick="myFunction()" className='f5 dropbtn'>ABOUT </li>
						<div id='myDropdown' className="dropdown-content ">
							<p onClick={() => onRouteChange('about')}>About</p>
					        <p onClick={() => onRouteChange('services')}>Services</p>
					        <p onClick={() => onRouteChange('ourpeople')}>Our People</p>
					        <p onClick={() => onRouteChange('awards')}>Awards</p>
					        <p onClick={() => onRouteChange('hseq')}>HSEQ</p>
					        <p onClick={() => onRouteChange('ourvalues')}>Our Values</p>
					        <p onClick={() => onRouteChange('csr')}>CSR</p>
					     </div>
				</div>
				

				 <div className='dropdown'>
				 	<li onclick="myFunction()" className='f5 dropbtn'>CURRENT</li>
				 		<div id='myDropdown' className="dropdown-content ">
							<p onClick={() => onRouteChange('about')}>About</p>
					        <p onClick={() => onRouteChange('services')}>Services</p>
					        <p onClick={() => onRouteChange('ourpeople')}>Our People</p>
					        <p onClick={() => onRouteChange('awards')}>Awards</p>
					        <p onClick={() => onRouteChange('hseq')}>HSEQ</p>
					        <p onClick={() => onRouteChange('ourvalues')}>Our Values</p>
					        <p onClick={() => onRouteChange('csr')}>CSR</p>
					     </div>
				 </div>

				 <div className='dropdown'>
				 	<li onclick="myFunction()" className='f5 dropbtn'>COMPLETED</li>
				 		<div id='myDropdown' className="dropdown-content ">
							<p onClick={() => onRouteChange('about')}>About</p>
					        <p onClick={() => onRouteChange('services')}>Services</p>
					        <p onClick={() => onRouteChange('ourpeople')}>Our People</p>
					        <p onClick={() => onRouteChange('awards')}>Awards</p>
					        <p onClick={() => onRouteChange('hseq')}>HSEQ</p>
					        <p onClick={() => onRouteChange('ourvalues')}>Our Values</p>
					        <p onClick={() => onRouteChange('csr')}>CSR</p>
					     </div>
				 </div>

				<div>
					<li className='f5 dropbtn' onClick={() => onRouteChange('home')}>TENDERS</li>
				</div>

				<div>
					<li className='f5 dropbtn' onClick={() => onRouteChange('home')}>CAREERS</li>
				</div>

				 <div>
					<li className='f5 dropbtn' onClick={() => onRouteChange('home')}>CONTACT</li>
				</div>
				
				
				
				
				
				
				
				

			</ul>
		</nav>
	)
}

export default SideNavbar;
