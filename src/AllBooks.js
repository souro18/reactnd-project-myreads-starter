import React from 'react';
import Book from './Book'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { setSearchBook, updateSearchBook } from './redux-module/action-creator';
import * as BooksAPI from './BooksAPI';

class AllBooks extends React.Component {

  debounce = (fn, time) => {
    let timer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(()=>fn.apply(context,args), time);
    }
  }

  updateQuery=(query)=>{
    query =query.trim()
    if(query) {
      BooksAPI.search(query).then((res)=> {
        this.props.onBooksLoaded(res)
      })
    }
  }

  addBook=(book, state) => {
    const existingBook = this.props.books.find((b)=>{
      return (b.title === book.title && book.authors[0] === b.authors[0])
    });
    book.state = state;
    if(existingBook) {
      BooksAPI.updateBook(book).then((res) => {
        this.props.onBookAdded(book, false)
      })
    } else {
      BooksAPI.addBook(book).then((res) => {
        this.props.onBookAdded(res.data.book, true)
      })
    }
  }

  render() {
    const debouncedUpdate = this.debounce(this.updateQuery, 200);
		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link to={{
                pathname: '/dashboard',
              }} className="close-search">
                Close
              </Link>
            <div className="search-books-input-wrapper"> 
              <input type="text" placeholder="Search by title or author"
              onChange={(event)=>debouncedUpdate(event.target.value)}/>
            </div>
          </div>

          <div className="search-books-results">
            {this.props.searchedBooks.length !== 0 ? (
              <ol className="books-grid">
                {this.props.searchedBooks.map((book)=>{
                    return <li key={book.id}><Book book={book}
                    updateBook={this.addBook}/></li>
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

const mapStateToProps = state => {
  return {
    books: state.books,
    searchedBooks: state.searchedBooks,
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => {
      dispatch(setSearchBook(books))
    },
    onBookAdded: (book, isNew) => {
      dispatch(updateSearchBook(book, isNew))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);;