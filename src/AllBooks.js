import React from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class AllBooks extends React.Component {
	state = {
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
          this.setState({ searchedBooks:[]})
        }
        else {
          this.setState({searchedBooks:res})
        }
    })
    }
    else {
      this.setState({searchedBooks:[]})
    }
    this.state.searchedBooks.map((book)=>{

    })
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
                  {this.state.searchedBooks.map((book)=>{
                    var found = this.props.books.find((b)=>{
                      return (b.id=== book.id)
                    });
                    (found) ? (book.shelf = found.shelf) : book.shelf="none";
               return <li key={book.id}><Book book={book}
                 updateBook={this.props.updateBook}/></li>
               }
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