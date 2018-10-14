# MyReads Project

This is a web based project which is build as a part of Udacity's [Front-End Nanodegree](https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001) Program. This project primarily focuses on React framework and features like react component , router ,state.


## Installation

To get started :

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├── App.css # Styles for the app.
    ├── AllBooks.js # Shows all books
    ├── App.js # This is the root of the app. 
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── Book.js # renders book component
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── myReads.js # shows Currently reading , read and want to read books.
    └── index.js # It is used for DOM rendering only.
```


## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.



