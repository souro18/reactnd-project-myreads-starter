import axios from 'axios';

const api = "https://reactnd-books-api.udacity.com"
const API = "https://myread-apps.herokuapp.com/"


// Generate a unique token for storing your bookshelf data on the backend server.
// let tokens = 
// if (!tokens)
//   tokens = Math.random().toString(36).substr(-8)

const getHeaders = () => {
  return {
  'Accept': 'application/json',
  'Authorization': sessionStorage.getItem("token"),
}
}

const APIheader = {
  'Accept': 'application/json',
}

export const search = (query) => {
const headers = getHeaders();
  return fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
}


export const register = (data) => {
  return axios.post(API+ 'user/register', data, { APIheader })
    .then(res => res.json())
}

export const login = (data) => {
  return axios.post(API+ 'user/login', data, { APIheader })
}

export const addBook = (data) => {
  const headers = getHeaders();
  return axios.post(API+ 'book', data, { headers });
}

export const updateBook = (data) => {
  const headers = getHeaders();
  return axios.put(API+ 'book', data, { headers })
}

export const getAllBooks = () => {
  const headers = getHeaders();
  return axios.get(API+ 'books', { headers });
}
