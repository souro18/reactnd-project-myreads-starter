import React, {memo} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import Book from './Book'

function MyReads(props) {
    const shelfData = [{
      name: 'Currently Reading',
      books: props.currentlyReading,
    }, {
      name: 'Want to Read',
      books: props.wantToRead,
    }, {
      name: 'Read',
      books: props.read,
    }];
		return (
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelfData.map(shelf => {
                  return (<div className="bookshelf" key={shelf.name}>
                    <h2 className="bookshelf-title">{shelf.name}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {shelf.books.map((book)=>
                        <li key={book.id}><Book book={book} updateBook= {props.updateBook}/></li>
                      )}
                      </ol>
                    </div>
                  </div>)
                })}
              </div>
            </div>
            <div className="open-search">
              <Link to={{
                  pathname: '/search',
                }}>
                  Add a Book
                </Link>
            </div>
          </div>


			)
	
}
const mapStateToProps = state => {
  return { isLogged: state.isLoggedIn }
}
export default  connect(mapStateToProps, null)(MyReads);