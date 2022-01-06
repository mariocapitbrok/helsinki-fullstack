// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

const t = [1, -1, 3]

const t2 = t.concat(5)
const t3 = [...t, ...t2]

console.log(t) // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
console.log(t3)
