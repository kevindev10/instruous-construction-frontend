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
						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('about')}>ABOUT+							<div class="dropdown-content ">
							    <a href="a.com">SERVICES</a>
							    <a href="b.com">OUR PEOPLE</a>
							    <a href="c.com">AWARDS</a>
							    <a href="d.com">HSEQ</a>
							    <a href="e.com">OUR VALUES</a>
							    <a href="f.com">CORPORATE SOCIAL RESPONSIBILTY</a>
							  </div>
						</li>

						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('about')}>CURRENT+
								<div class="dropdown-content ">
							    <a href="a.com">SERVICES</a>
							    <a href="b.com">OUR PEOPLE</a>
							    <a href="c.com">AWARDS</a>
							    <a href="d.com">HSEQ</a>
							    <a href="e.com">OUR VALUES</a>
							    <a href="f.com">CORPORATE SOCIAL RESPONSIBILTY</a>
							  </div>
						</li>

						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('about')}>COMPLETED+
								<div class="dropdown-content ">
							    <a href="a.com">SERVICES</a>
							    <a href="b.com">OUR PEOPLE</a>
							    <a href="c.com">AWARDS</a>
							    <a href="d.com">HSEQ</a>
							    <a href="e.com">OUR VALUES</a>
							    <a href="f.com">CORPORATE SOCIAL RESPONSIBILTY</a>
							  </div>
						</li>
						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('about')}>TENDERS</li>
						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('about')}>CAREERS</li>
						<li className=' dropdown dropbtn grow '  onClick={() => onRouteChange('about')}>CONTACT</li>
						
						
					</ul>
				</div>
			</nav>
		)
}

export default Navigation;