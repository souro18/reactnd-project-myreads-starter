import React from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class AllBooks extends React.Component {
	state = {
    query : ''
  }
  updateQuery=(query)=>{
    this.setState({query :query.trim()})
  }

  render() {
    const match = new RegExp(escapeRegExp(this.state.query,'i'))
    var filteredBooks= (this.state.query) ? (
      this.props.books.filter((book) => match.test(book.title))
      ) : this.props.books
    filteredBooks.sort(sortBy('title'))
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
              <ol className="books-grid">
              {filteredBooks.map((book)=>
              	<li key={book.id}><Book book={book}
                 updateBook={this.props.updateBook}/></li>
              	)}
              </ol>
            </div>
          </div>
		);
	}
}

export default AllBooks;