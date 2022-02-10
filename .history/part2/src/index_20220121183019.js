// import ReactDOM from 'react-dom'
// import App from './App.js'

// ReactDOM.render(<App />, document.getElementById('root'))

const result = function (resolve, reject) {
  setTimeout(() => resolve(1), 1000) // (*)
}
  .then(function (result) {
    // (**)

    alert(result) // 1
    return result * 2
  })
  .then(function (result) {
    // (***)

    alert(result) // 2
    return result * 2
  })
  .then(function (result) {
    alert(result) // 4
    return result * 2
  })

console.log(result)
