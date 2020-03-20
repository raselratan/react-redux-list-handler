import React,{Component} from 'react'

class Book extends Component{

    state={
        isEditable:false,
    }

    changeKeyHandler = (event) => {

        if(event.key === 'Enter'){
            this.setState({
                isEditable:false
            })
        }
    }

    render(){

        let output = this.state.isEditable ? 
                     <input 
                     onChange = { e => this.props.editHandler(e.target.value,this.props.aBook.id) }
                     onKeyPress = { this.changeKeyHandler }
                     type="text" placeholder="Enter Name" 
                     value={this.props.aBook.name}/>
                     :
                     <p>{ this.props.aBook.name }</p>

        return(
            <li className="list-group-item d-flex">
                {output}
                <span className="ml-auto">${ this.props.aBook.price }</span>
                <div className="ml-4">
                    <span onClick={()=>this.props.deleteHandler(this.props.aBook.id)} style={{cursor:'pointer'}} ><i className="fa fa-trash"></i></span>
                    <span onClick={ ()=> this.setState({isEditable:true})} className="ml-2" style={{cursor:'pointer'}}><i className="fa fa-edit"></i></span>
                </div>
            </li>
        )
    }
}

export default Book