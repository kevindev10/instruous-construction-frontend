import React from 'react';
import banner from './banner.jpg' 
import './Banner.css'

const Banner = () => {
	return(
		<div className ='banner'>
			<div classname ='spacer'/>
			<img src ={banner} alt=''/>

		</div>
	)
}
 export default Banner;