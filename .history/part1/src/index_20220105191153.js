// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second) // 1, 2 is printed
console.log(rest) // [3, 4, 5] is printed
