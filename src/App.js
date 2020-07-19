import React, {lazy, Suspense} from 'react'
import { Route, Switch } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'

import Loader from './loader';
import Login from './Login';
import Auth from './Auth';
const AllBooks = lazy(()=> import('./AllBooks')); 
const MyReads = lazy(() => import('./myReads'));
const Register = lazy(() => import('./Register'));

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
        <Suspense fallback={<Loader/>}>
          <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/" component={Auth}>
          <Route path="/search">
              <AllBooks 
                books={this.state.books}
                updateBook= {this.updateBook}/>
          </Route>
          <Route path="/dashboard" render={props =>
              <MyReads 
                currentlyReading={this.state.currentlyReading}
                wantToRead={this.state.wantToRead}
                read={this.state.read}
                updateBook= {this.updateBook}/>
          }/>
          </Route>
          </Switch>
        </Suspense>
      </div>
    )
  }
}

export default BooksApp;
