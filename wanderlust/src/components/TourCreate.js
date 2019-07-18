import React from 'react';
import '../TourCreate.css';
import axios from 'axios';
import '../dummyData';
import TourContainer from './TourContainer';
import dummyData from '../dummyData';
import axiosAuth from '../reducers/axiosAuth'
class TourCreate extends React.Component{
    constructor(props){
        super(props)
        this.state ={tours:[  {
             max_duration:'',
            location:'',
          type:'',
          }]};
    }
      



    
    addNew =   newTour => {
         
         axiosAuth()
        .post('https://wanderlust-api.herokuapp.com/api/tours', newTour)
            .then(res => {
              const tour = res.data
              this.setState({ ...this.state.tours , tour })
              console.log("!!!!",tour)
              console.log(' NEW:',newTour)

            })
            .catch(err => console.error(err))
         }
        


    addTour = e => {
        e.preventDefault();
       const tour = this.state

         this.addNew(tour)
        this.setState( {  
         max_duration:'',
        location:'',
        type:'',
       })
        console.log('STATE',this.state)
        console.log('NEW!!', tour)
           
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };


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
 
              
              <div className = 'tourForm'>


 
                 
                      <div className ='info'>

                         <div className ='header'>
                         <h1> {this.state.tourName}
</h1>  
                         </div>

                         <div className = 'threeDiv'>
                             <div className ='picDiv'></div>

                             <div className ='placeHolder'>
                             <h4>duration:</h4>

                                <h4>location:</h4>
                                <h4>tour type:</h4>

                                 

                                 
                                


                             </div>
                                

                                <div className ='data'>

                                <h3>{this.state.max_duration}</h3>
                                <h3>{this.state.location}</h3>
                                <h3>{this.state.type}</h3>

                                

                                </div>
                                 
                               




                         </div>

                         <div className = 'desP'>

                          <p>{this.state.description}</p>
                          
                                     
</div>
{/* <div>
        <ul>
    {this.state.tours.map (e => {
        return (
            <div className ='Stuff'>

                <h2> {e.location}</h2>
                <h2>{e.type}</h2>
                <h2>{e.max_duration}</h2>
            </div>

        )
    })}

</ul>
            
            
            </div>    */}
            <TourContainer/>

                      </div>
              <form onSubmit ={this.addTour}>
              
                  
                    <input
                   onChange = {this.handleInputChange}
                   placeholder = 'duration'
                   value = {this.state.max_duration}
                   name='duration'
                   />
                    <input
                   onChange = {this.handleInputChange}
                   placeholder = 'location'
                   vale = {this.state.location}
                   name='location'
                   />
                    <input
                   onChange = {this.handleInputChange}
                   placeholder = 'tour type'
                   vale = {this.state.type}
                   name='tourType'
                   />
                    
                   <button type ='submit'>Add a Tour!</button>










              </form>
         


</div>
                     
              

            
          );
      }
}




export default TourCreate