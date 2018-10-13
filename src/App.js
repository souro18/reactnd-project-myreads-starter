import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import AllBooks from './AllBooks'
import MyReads from './myReads'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    currentlyReading : [],
    wantToRead :[],
    read :[]
    }
  componentDidMount(){
    
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      this.setState({
      currentlyReading : books.filter((book) => 
        book.shelf==="currentlyReading" 
       )
      })
      this.setState({
      wantToRead : books.filter((book) => 
        book.shelf==="wantToRead" 
       )
      })
      this.setState({
      read : books.filter((book) => 
        book.shelf==="read" 
       )
      })
     })
    
  }

 updateBook=(book, Shelf) =>{
    console.log(book.shelf,Shelf)
    BooksAPI.update(book, Shelf).then((res)=> {

      BooksAPI.getAll().then((books)=> {
        this.setState({books},this.componentDidMount)
      })
    });

    
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={()=>(
            <AllBooks 
            books={this.state.books}
            updateBook= {this.updateBook}/>
          )}/>
          <Route exact path="/" render={()=>(
            <MyReads 
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            updateBook= {this.updateBook}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
