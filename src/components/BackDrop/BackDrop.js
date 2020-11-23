import React from 'react';
import './BackDrop.css';


const BackDrop = ({close}) =>{
	return(
		<div onClick={close} className ='backdrop'>
		</div>
	)
}

export default BackDrop;