import React from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class AllBooks extends React.Component {
	state = {
    found : false,
    searchedBooks : []
  }
  // searchedBooks= []
  updateQuery=(query)=>{
    query =query.trim()
    console.log("query" +query)
    if(query) {
      BooksAPI.search(query).then((res)=> {
        console.log(res)
        if(res.error) {
          console.log("error")
          this.setState({ searchedBooks:[]})
          console.log("error2")
        }
        else {
          console.log("books set")
          this.setState({searchedBooks:res})
          console.log("set2")
        }
    })
    }
    else {
      console.log("empty")
      this.setState({searchedBooks:[]})
      console.log("empty2")
    }
  }

  render() {

		return (
			<div className="search-books">
            <div className="search-books-bar">
            <Link to={{
                  pathname: '/',
                  //search: '?sort=name',
                  //hash: '#the-hash',
                  //state: { fromDashboard: true }
                }} className="close-search">
                  Close
                </Link>
              <div className="search-books-input-wrapper">
               
                <input type="text" placeholder="Search by title or author"
                onChange={(event)=>this.updateQuery(event.target.value)}/>

              </div>
            </div>

            <div className="search-books-results">
              {(this.state.searchedBooks) ? (
                <ol className="books-grid">
                  {this.state.searchedBooks.map((book)=>
               <li key={book.id}><Book book={book}
                 updateBook={this.props.updateBook}/></li>
               )}
              </ol>

              ):(
              <p>No Matched Results</p>
              )}
            </div>
          </div>
		);
	}
}

export default AllBooks;