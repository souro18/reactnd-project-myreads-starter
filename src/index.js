import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import store from './redux-module/store';
import {Provider} from 'react-redux';
import './index.css'

ReactDOM.render(
	<Provider store={store}>
	<Router>
			<App />
	</Router>
	</Provider>
	, document.getElementById('root'))
