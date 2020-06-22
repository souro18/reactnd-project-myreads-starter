import React, {lazy, Suspense} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
const AllBooks = lazy(()=> import('./AllBooks')); 
const MyReads = lazy(() => import('./myReads'));

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading : [],
    wantToRead :[],
    read :[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.filterBook(books)
     });
  }

  filterBook=(books)=> {
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");
    this.setState({books, currentlyReading, wantToRead, read});
  }

  updateBook=(book, Shelf) =>{
    BooksAPI.update(book, Shelf).then((res)=> {
      let allBook = this.state.books.filter((b) => {
        return (b.id!==book.id)
      })
      book.shelf = Shelf
      allBook.push(book)
      this.filterBook(allBook);
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/search">
            <Suspense fallback={<div>Loading...</div>}>
              <AllBooks 
                books={this.state.books}
                updateBook= {this.updateBook}/>
            </Suspense>
          </Route>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <MyReads 
                currentlyReading={this.state.currentlyReading}
                wantToRead={this.state.wantToRead}
                read={this.state.read}
                updateBook= {this.updateBook}/>
            </Suspense>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default BooksApp;
