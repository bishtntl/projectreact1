import { Component } from "react";


class DataCompo extends Component{
    constructor(props){
        super(props);
        console.log(this.props.value)
    }
    
    render(){
        return(
            <>
            <div className="global">
                {this.props.value.map((item,index)=>{
                    return(
                        <div  >
                            <h1 key={index} className="one">
                                Name:{item.name}|
                                Department:{item.department}|
                                Rating:{item.rating}|
                                
                            </h1>
                           

                        </div>
                    )

                })}
               
            </div>
            <button onClick={this.props.ChangeFunc} className="bntgoback">Go Back</button>
            </>
        )
    }
}
    
export default DataCompo;







  