import axios from 'axios';

const api = "https://reactnd-books-api.udacity.com"
const API = "https://myread-apps.herokuapp.com/"


// Generate a unique token for storing your bookshelf data on the backend server.
let tokens = localStorage.token
if (!tokens)
  tokens = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': tokens,
}

const APIheader = {
  'Accept': 'application/json',
}

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)


export const register = (data) => {
  return axios.post(API+ 'user/register', data, { APIheader })
    .then(res => res.json())
}

export const login = (data) => {
  return axios.post(API+ 'user/login', data, { APIheader })
}

export const addBook = (data) => {
  return axios.post(API+ 'book', data, { headers });
}

export const updateBook = (data) => {
  return axios.put(API+ 'book', data, { headers })
}

export const getAllBooks = () => {
  return axios.get(API+ 'books', { headers });
}
