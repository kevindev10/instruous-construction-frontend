import React from 'react';
import banner from './banner.jpg' 
import './Banner.css'

const Banner = () => {
	return(
		<div>
			<div className ='spacer '></div>
			<img className ='banner' src ={banner} alt=''/>
		</div>
		

		
	)
}
 export default Banner;