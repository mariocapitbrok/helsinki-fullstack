// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1]) // -1 is printed

t.forEach((value) => {
  console.log(value) // numbers 1, -1, 3, 5 are printed, each to own line
})
