import React, {lazy, Suspense} from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Loader from './loader';
import Login from './Login';
import Auth from './Auth';
const AllBooks = lazy(()=> import('./AllBooks')); 
const MyReads = lazy(() => import('./myReads'));
const Register = lazy(() => import('./Register'));

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Suspense fallback={<Loader/>}>
          <Route path="/register" component={Register} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/" component={Auth} />
            <Route path="/search" component={AllBooks} />
            <Route path="/dashboard" component={MyReads}/>
        </Suspense>
      </div>
    )
  }
}

export default BooksApp;
