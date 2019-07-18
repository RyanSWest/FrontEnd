import React from 'react';
import Tour from './Tour';

import axios from 'axios';
  
class TourContainer extends React.Component {
	constructor(props){
		super(props);
		this.state ={ tours: []};
	}


	componentDidMount(){
		axios.get('https://wanderlust-api.herokuapp.com/api/tours')
		.then(res=> {
		  let tours = res.data
		  this.setState(()=> ({tours: res.data}))
	
		  console.log("TOURS:", tours)
	
		})
		.then(res => {
		  console.log("NEWSTATE!!",this.state)
		 })
		.catch(err => {
		  console.log('Server Error', err)
		})
		
 	}
	 render(){
		 return(

		<div> 

			<ul>
                {this.state.tours.map (e => {
					return (
						<div>

							<h1>{e.location}</h1>
							<h1>{e.max_duration}</h1>
							<h1>{e.type}</h1>
						</div>

					)
				})}

			</ul>
		</div>)

		
	 }
	
	
};

export default TourContainer;