import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class MyReads extends React.Component {
	render() {
		return (
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.currentlyReading.map((book)=>
		              	<li key={book.id}><Book book={book} updateBook= {this.props.updateBook}/></li>
		              	)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.wantToRead.map((book)=>
		              	<li key={book.id}><Book book={book} updateBook={this.props.updateBook}/></li>
		              	)}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.read.map((book)=>
		              	<li key={book.id}><Book book={book} updateBook={this.props.updateBook}/></li>
		              	)}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to={{
                  pathname: '/search',
                  //search: '?sort=name',
                  //hash: '#the-hash',
                  //state: { fromDashboard: true }
                }}>
                  Add a Book
                </Link>
            </div>
          </div>


			)
	}
}

export default MyReads