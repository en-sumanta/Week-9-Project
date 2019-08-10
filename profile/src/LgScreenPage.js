import React from 'react';
import style from './style.css';
import Component from 'react';
class LgScreePage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='col-lg-12 d-none d-lg-block' style={{ height:'302px'}}>
			<div className="container">
		        <img src="./image/sumanta.jpg" class="col-lg-3 float-left mt-lg-4 rounded-0" style={{height:'250px'}}/>
		        <div class="col-lg-8 float-left bg-light mt-lg-4" style={{height:'250px'}}>
		        <h3 className='text-info'>
		        Welcome to my page !
		        </h3>
	        	<p classNane='text-justify pt-lg-5'>Hi, I am Sumanta Kumar Malik, I am learning as a Full Stack-Developer Programming course at Masai School, Now I am in the 9th week of this course
		        	<a href='https://www.masaischool.com/' className='text-decoration-none p-lg-1'>
		        	  Masai School
		        	 </a> 
		        	 gives the next generation of education I built this Webpage for my presentation. On this webpage, I have used to React Js and Bootstrap 4. I hope you people like it. <button type="button bg-none border border-success" class="btn btn-info">Thanks !</button>
		        	</p>
		        </div>
		    </div>
		   </div>
		);
	}
}
export default LgScreePage;