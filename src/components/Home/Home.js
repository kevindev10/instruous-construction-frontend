import React from 'react';
import banner from './banner.jpg';
import completed1 from './completed1.jpg';
import completed2 from './completed2.jpg';
import completed3 from './completed3.jpg';
import './Home.css';

const Home = () =>{
	return(
		<div>
			<div>
				<div className ='spacer '></div>
				<img className ='banner' src ={banner} alt=''/>
			</div>
			<p className='tc f3 bolded '>
						IT STARTS WITH INSTRUOUS CONSTRUCTION.<br/><br/>
				THE WORLD'S LEADING COMMERCIAL CONSTRUCTION COMPANY <br/><br/>
				Building this potential is made possible by our unique approach where we apply all the responsiveness,<br/> 
				accountability and agility usually only found in much smaller companies, <br/>
				together with being backed by the large-scale efficiencies, <br/>
				strength and financial security of the ABN Group.<br/><br/>

				In every project, we challenge ourselves to achieve industry best practice outcomes.<br/>
				Let’s talk about the potential of your next construction project today.<br/>
			</p>
			<div className='center project--links'>
				<p className="btn btn--link center f4  ">UNDER CONSTRUCTION  </p>
				<p className="btn btn--link center f4">COMPLETED  </p>
			</div>



			<div  className='center projects-desktop'> 




				<div className='pa1'>
					<a href="#" className="link  dt hide-child br2 cover bg-center" 
					style ={ { backgroundImage: "url("+completed1+")" ,
						'width':'550px', 'height':'520px'
					}} >
					  <span className="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
					    <h1>COPMLETED PROJECT 1</h1>
						<h2>Education Construction</h2>
						<p className=''>Lorem ipsum dolor sit amet, consectetur<br/>
						   adipiscing elit, sed do eiusmod tempor<br/> 
						   incididunt ut labore et dolore magna<br/>
						   aliqua. Ut enim ad minim veniam, quis<br/>
						   nostrud exercitatio llamco laboris<br/>	
						   nisi ut aliquip ex ea commodo consequat.<br/>
						</p>
					  </span>
					</a>
				</div>


				<div className='pa1'>
					<a href="#" className="link  dt hide-child br2 cover bg-center" 
					style ={ { backgroundImage: "url("+completed2+")" ,
						'width':'550px', 'height':'520px'
					}} >
					  <span className="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
					    <h1>COPMLETED PROJECT 2</h1>
						<h2>Retail and Hospitality Construction</h2>
						<p className=''>Lorem ipsum dolor sit amet, consectetur<br/>
						   adipiscing elit, sed do eiusmod tempor<br/> 
						   incididunt ut labore et dolore magna<br/>
						   aliqua. Ut enim ad minim veniam, quis<br/>
						   nostrud exercitatio llamco laboris<br/>	
						   nisi ut aliquip ex ea commodo consequat.<br/>
						</p>
					  </span>
					</a>
				</div>



				<div className='pa1'>
					<a href="#" className="link  dt hide-child br2 cover bg-center" 
					style ={ { backgroundImage: "url("+completed3+")" ,
						'width':'550px', 'height':'520px'
					}} >
					  <span className="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
					    <h1>COPMLETED PROJECT 3</h1>
						<h2>Aged Care Construction</h2>
						<p className=''>Lorem ipsum dolor sit amet, consectetur<br/>
						   adipiscing elit, sed do eiusmod tempor<br/> 
						   incididunt ut labore et dolore magna<br/>
						   aliqua. Ut enim ad minim veniam, quis<br/>
						   nostrud exercitatio llamco laboris<br/>	
						   nisi ut aliquip ex ea commodo consequat.<br/>
						</p>
					  </span>
					</a>
				</div>


			</div>


			<div>
				<div className='projects-mobile'>
					<div className='mb1'>
						<a href="#" className="link  dt hide-child br2 cover bg-center" 
							style ={ { backgroundImage: "url("+completed1+")" ,
								'width':'350px', 'height':'200px'
							}}>
						</a>	
					</div>

					<div className='mb1'>
						<a href="#" className="link  dt hide-child br2 cover bg-center" 
							style ={ { backgroundImage: "url("+completed2+")" ,
								'width':'350px', 'height':'200px'
							}}>
						</a>
					</div>

					<div className='mb1'>
						<a href="#" className="link  dt hide-child br2 cover bg-center" 
							style ={ { backgroundImage: "url("+completed3+")" ,
								'width':'350px', 'height':'200px'
							}} >
						</a>
					</div>
					
					
				</div>
			</div>


		</div>
	)
} 


export default Home;