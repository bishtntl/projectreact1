import React,{Component} from 'react'
import './style.css'
import DataCompo from './Data';

class StructureCompo extends Component{
    constructor(){
        super();
        this.state={
            Name:" ",
            Department:" ",
            Rating:" ",
            Click:true,
            subarr:[]
        }
    }
    changedata =(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
      
    }
    clickme=(a)=>{
        a.preventDefault()
        const  objtem={
            name:this.state.Name,
            department:this.state.Department,
            rating:this.state.Rating
            }
            this.state.subarr.push(objtem)
            this.setState({
                subarr: this.state.subarr,
                Name:" ",
            Department:" ",
            Rating:" ",
            Click:false
            })  
            

    }
    ToggleFunc=()=>{
        this.setState({
            Click: !this.state.Click
        })
    }
    render(){
        return(
            <>
           
        
            <h1 className='heading'>Employee FeeDBack Form</h1>


            {this.state.Click? <form> 
              <label htmlFor="name"><b style={{fontSize:'1.5em'}}>Name :</b></label>
                <input type='text' name='Name' id='name' placeholder='Enter Your Name' value={this.state.Name} autoComplete='off' required className='round' onChange={this.changedata}/><br/><br/>
                <label htmlFor="depart"><b style={{fontSize:'1.5em'}}>Department :</b></label>
                <input type='text' name='Department' id='depart' placeholder='Enter Your Department' value={this.state.Department} autoComplete='off' required className='round' onChange={this.changedata}/><br/><br/>
                <label htmlFor="rate"><b style={{fontSize:'1.5em'}}>Rating :</b></label>
                <input type='text' name='Rating' placeholder='Give Your Rating' value={this.state.Rating}  autoComplete='off' required  className='round' onChange={this.changedata}/><br/><br/>

             <button onClick={this.clickme} className='btn'>Submit</button>

              </form> 
             :<DataCompo value={this.state.subarr} ChangeFunc={this.ToggleFunc}/>}

          
            </>
        )
    }
}
export default StructureCompo;