import React from 'react';
import Component from 'react';
import Propfile from './profile';
class List extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h3 className='list-group-item ml-lg-0 pl-lg-0 border-0'>Skill</h3>
				<ul className="list-group">		  
				  <li className="list-group-item list-group-item-primary p-lg-1">{this.props.subOne}</li>
				  <li className="list-group-item list-group-item-secondary p-lg-1">{this.props.subTwo}</li>
				  <li className="list-group-item list-group-item-successp-lg-1 p-lg-1">{this.props.subThree}</li>
				  <li className="list-group-item list-group-item-danger p-lg-1">{this.props.subFour}</li>
				  <li className="list-group-item list-group-item-warning p-lg-1">{this.props.subFive}</li>
				</ul>
			</div>
		)
	}
}
function SubList(props){
	return(
		<List/>
	);
}
export default List

