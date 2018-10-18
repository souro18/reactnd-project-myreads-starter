import React from 'react';


class Book extends React.Component {
	render() {
		return (
			<div className="book">
	          <div className="book-top">
	            <div className="book-cover" style={{ width: 128, height: 193}}>
	            	{(this.props.book.imageLinks)?
	            	(<img src={this.props.book.imageLinks.thumbnail} style={{ width: 128, height: 193}} alt={this.props.book.title}/>):
	            	(<img src="" style={{ width: 128, height: 193}} alt={this.props.book.title}/>)
	            	
	            	}
	            </div>
	            <div className="book-shelf-changer">
	              <select onChange={(event)=>
	              	this.props.updateBook(this.props.book,event.target.value)} defaultValue="move">
	                <option value="move" disabled>Move to...</option>
	                <option value="currentlyReading" className={(this.props.book.shelf==='currentlyReading')? 'selected-shelf' : null}>Currently Reading</option>
	                <option value="wantToRead" className={(this.props.book.shelf==='wantToRead')? 'selected-shelf' : null}>Want to Read</option>
	                <option value="read" className={(this.props.book.shelf==='read')? 'selected-shelf' : null}>Read</option>
	                <option value="none" className={(this.props.book.shelf==='none')? 'selected-shelf' : null}>None</option>
	              </select>
	            </div>
	          </div>
	          <div className="book-title">{this.props.book.title}</div>
	          <div className="book-authors">{this.props.book.authors}</div>
	        </div>

		)
	}
}

export default Book