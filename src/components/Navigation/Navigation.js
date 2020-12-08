import React from 'react';
import './Navigation.css'


const Navigation = ({open ,onRouteChange}) =>{
	return(
			<nav className='nav-bar o-50'>
				<div className='nav-icon' onClick ={open}>
					<i className="material-icons">menu</i>
				</div>

				<div className=''>
					<div className='nav-logo  ' onClick={() => onRouteChange('home')}>
						Instruous Construction
					</div>
				</div>
				
				<div className='nav-space' />
				<div className='nav-items'>
					<ul className='f3'>
						<li  className=' dropdown dropbtn grow ' onClick={() => onRouteChange('home')}>HOME</li>
						<li className=' dropdown dropbtn grow ' >ABOUT+		
							<div class="dropdown-content ">
							    <li  onClick={() => onRouteChange('about')} >ABOUT</li>
							    <li onClick={() => onRouteChange('services')}>SERVICES</li>
							    <li onClick={() => onRouteChange('ourpeople')}>OUR PEOPLE</li>
							    <li onClick={() => onRouteChange('awards')}>AWARDS</li>
							    <li onClick={() => onRouteChange('hseq')}>HSEQ</li>
							    <li onClick={() => onRouteChange('ourvalues')}>OUR VALUES</li>
							    <li onClick={() => onRouteChange('csr')}>CSR</li>
							  </div>
						</li>

						<li className=' dropdown dropbtn grow ' >CURRENT+
								<div class="dropdown-content ">
								    <li  onClick={() => onRouteChange('current')} >CURRENT</li>
								    <li onClick={() => onRouteChange('currentone')}>CURRENT ONE</li>
								    <li onClick={() => onRouteChange('currenttwo')}>CURREN TWO</li>
								    
							  </div>
						</li>

						<li className=' dropdown dropbtn grow '  >COMPLETED+
								<div class="dropdown-content ">
								    <li  onClick={() => onRouteChange('completed')} >COMPLETED</li>
								    <li onClick={() => onRouteChange('completedone')}>COMPLETED ONE</li>
								    <li onClick={() => onRouteChange('completedtwo')}>COMPLETED TWO</li>
								    <li onClick={() => onRouteChange('completedthree')}>COMPLETED THREE</li>
								    <li onClick={() => onRouteChange('completedfour')}>COMPLETED FOUR</li>
								    <li onClick={() => onRouteChange('completedfive')}>COMPLETED FIVE</li>
								    
							  </div>
						</li>
						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('tenders')}>TENDERS</li>
						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('careers')}>CAREERS</li>
						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('contact')}>CONTACT</li>
						
						
					</ul>
				</div>
			</nav>
		)
}

export default Navigation;