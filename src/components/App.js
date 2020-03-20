import React,{Component} from 'react';
import './App.css';
import Books from './books/Books'
class App extends Component{

  state = {
    books:[
    {
      id:1,
      name:'React',
      price:30
    },
    {
      id:2,
      name:'Redux',
      price:35
    },
    {
      id:3,
      name:'NodeJs',
      price:40
    },
    {
      id:4,
      name:'React Native',
      price:37
    },
  ]
  }

  deleteBook = (id) => {
    let newBooks = this.state.books.filter(book => book.id != id)
    this.setState({
      books:newBooks
    })
  }


  editBook = (name,id) => {
    let newBooks = this.state.books.map((book)=>{
      if(id === book.id){
        return {
          ...book,
          name:name
        }
      }else{
        return book;
      }
    })
    this.setState({
      books:newBooks
    })
  }

  render(){
    return(
      <div className="App container">
        <Books editHandler={this.editBook.bind(this)} deleteHandler={this.deleteBook.bind(this)} books={this.state.books} />
      </div>
    )
  }
}

export default App;
