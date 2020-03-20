import React,{Component} from 'react'
import Book from './book/Book'
class Books extends Component{
    render(){
        return(
            <div>
                {
                    this.props.books.map((book,index) => {
                        return <Book key={index} 
                        editHandler={this.props.editHandler} 
                        deleteHandler={this.props.deleteHandler} 
                        aBook={book} />
                    })
                }
            </div>
        )
    }
}

export default Books