import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get('http://localhost:3001/persons')
  return request.then((response) => response.data)
}

const create = (newObj) => {}

const update = (id, newObj) => {}
