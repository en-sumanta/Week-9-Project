import React from 'react';
import Component from 'react';
import List from './list';
import style from './style.css';
class Propfile extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='col-lg-4 float-lg-left mt-lg-5 col-md-12 p-lg-3'>
			<div className='row pt-lg-0 ml-lg-1 p-lg-2 col-md-12 profile-box bg-light'>
			<div className='col-lg-4 pt-lg-0 col-md-3  col-md-4 col-sm-12 size-img' style={{backgroundColor:'#9E9E9E'}}>
				<img src={''+this.props.pic+''} alt='me' className='col-lg-12 col-md-6 rounded-circle profile-pic'/>
			</div>
				<div className='col-lg-8 float-lg-left col-md-6 p-lg-0 m-lg-0 ml-md-4 subject'>
					<h3>{this.props.name}</h3>
					<p className='p-0 m-0'>Id : Masai-{this.props.id}</p>
					<p className='p-0 m-0'>Emai : {this.props.email}</p>
					<p className='p-0 m-0'>Country : {this.props.city}</p>
					<p className='p-0 m-0'>Mob : {this.props.mob}</p>
					<p className='p-0 m-0'>Occupation : {this.props.occupation}</p>
					<div>{this.props.sub}</div>
				</div>
			</div>
			</div>
		)
	}
}
function Userprofile(props) {
		return(
			<div>
				<Propfile name='Prateek Shukla' id=' 001' email='prateek@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB' />}
				city='Bangalore' mob='9778522344' occupation='Ceo' pic='image/prateek.jpeg' />

				<Propfile name='Nrupul' id='002' email='nrupul@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='Bangalore' mob='9894840844' occupation='Cto' pic='image/nrupul.jpg' />

				<Propfile name='Yogesh Bhat' id='002' email='yogesh@gmail.com' 
				sub={<List subOne='Communication' subTwo='JavaScript' subThree='Soft Skill' subFour='Presentation' subFive='English'/>}
				city='Bangalore' mob='9894840844' occupation='Vice President' pic='image/yogesh.png' />

				<Propfile name='Akashya Kanna' id='002' email='marck@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='London' mob='9894840844' occupation='Manager' pic='image/akshya.jpg' />

				<Propfile name='Jhony' id='003' email='jhony@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='New York' mob='8584984848' occupation='President' pic='image/sumanta.jpg' />

				<Propfile name='Mohammad hassan' id='005' email='simonlenza@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='London' mob='7594774947' occupation='Full stack Developer' pic='image/hassan.png' />

				<Propfile name='De Caprido' id='006' email='marias@gmail.com' sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='German' mob='7872804794' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Rahul Pandey' id='007' email='decapiro@gmail.com' sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='London' mob='8048404984' occupation='Front-End-Developer' pic='image/rahul.jpg' />

				<Propfile name='Shidarth Ku Reji' id='008' email='lyna@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='Rome' mob='737393737' occupation='Front-End-Developer' pic='image/sidh.jpg' />

				<Propfile name='Rahul Pandey' id='009' email='rahuls@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='7497498474' occupation='Project Manager' pic='image/sumanta.jpg' />

				<Propfile name='Moushmi Ahmed' id='010' email='moushmi@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='7498987488' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Mohammad Hassan' id='011' email='hassan@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='7497497494' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Harren Chungo' id='012' email='harren@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='6486836386' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Ajya Lal' id='013' email='ajaya@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='7497497494' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Aksaya Kumar' id='014' email='akshya@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='6486836386' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Anusha Rani' id='015' email='anusha@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='5749747494' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Pawan Raja' id='015' email='pawan@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='9479447048' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Chandra Sherkhar' id='015' email='cshekhar@gmail.com'
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='8994794884' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Pawan Raja' id='015' email='pawan@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='9479447048' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Chandra Sherkhar' id='015' email='cshekhar@gmail.com'
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='8994794884' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Pawan Raja' id='015' email='pawan@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='9479447048' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Chandra Sherkhar' id='015' email='cshekhar@gmail.com'
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='8994794884' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Pawan Raja' id='015' email='pawan@gmail.com' 
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='9479447048' occupation='Front-End-Developer' pic='image/sumanta.jpg' />

				<Propfile name='Chandra Sherkhar' id='015' email='cshekhar@gmail.com'
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='8994794884' occupation='Front-End-Developer' pic='image/sumanta.jpg' />
				<Propfile name='Chandra Sherkhar' id='015' email='cshekhar@gmail.com'
				sub={<List subOne='Python' subTwo='JavaScript' subThree='Css' subFour='MySql' subFive='MongoDB'/>}
				city='India' mob='8994794884' occupation='Front-End-Developer' pic='image/sumanta.jpg' />
			</div>
		)
}
export default Userprofile;