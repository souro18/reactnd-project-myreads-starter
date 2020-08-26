import React from 'react';


const Book = (props) => {
	return (
		<div className="book">
			<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 193}}>
				{(props.book.imageLinks)?
				(<img src={props.book.imageLinks.thumbnail} style={{ width: 128, height: 193}} alt={props.book.title}/>):
				(<img src="" style={{ width: 128, height: 193}} alt={props.book.title}/>)
				
				}
			</div>
			<div className="book-shelf-changer">
				<select onChange={(event)=>
				props.updateBook(props.book,event.target.value)} defaultValue="move">
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading" className={(props.book.state ==='currentlyReading')? 'selected-shelf' : null}>Currently Reading</option>
				<option value="wantToRead" className={(props.book.state==='wantToRead')? 'selected-shelf' : null}>Want to Read</option>
				<option value="read" className={(props.book.state==='read')? 'selected-shelf' : null}>Read</option>
				<option value="none" className={(props.book.state ==='none')? 'selected-shelf' : null}>None</option>
				</select>
			</div>
			</div>
			<div className="book-title">{props.book.title}</div>
			<div className="book-authors">{props.book.authors}</div>
		</div>

	)
}

export default Book;