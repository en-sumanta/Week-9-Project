import React from 'react';
import Component from 'react';
import List from	'list';
class GenericList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<List list = 'Python'/>
				<List list = 'MongoDB'/>
				<List list = 'Oracle'/>
				<List list = 'Codinzer'/>
				<List list = 'Php'/>
			</div>
		);
	}
}