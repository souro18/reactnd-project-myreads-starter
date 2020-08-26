import React from 'react';
import Book from './Book'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as BooksAPI from './BooksAPI';

class AllBooks extends React.Component {
	state = {
    searchedBooks : []
  }

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
  }

  addBook=(book, state) => {
    book.state = state;
    BooksAPI.addBook(book).then((res) => {
      console.log("added", res)
    })
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
            {this.state.searchedBooks.length !== 0 ? (
              <ol className="books-grid">
                {this.state.searchedBooks.map((book)=>{
                  const found = this.props.books.find((b)=>{
                    return (b.title === book.title)
                  });
                  if(found) {
                    return null;
                  } else {
                    book.state="none";
                    return <li key={book.id}><Book book={book}
                    updateBook={this.addBook}/></li>
                  }   
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
   }
}

export default connect(mapStateToProps, null)(AllBooks);;