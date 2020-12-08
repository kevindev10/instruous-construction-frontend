import React from 'react';
import './Current.css';
import banner from './banner.jpg';

const Current = () => {
	return(
		<div>
			<div>
				<div className ='spacer '></div>
				<img style={{'width':'100%','height':'800px'}}className ='banner' src ={banner} alt=''/>
			</div>
			<p className='f1 '>THIS IS THE CURRENT WEB PAGE</p>
		</div>
		

		
	)
}
 export default Current;