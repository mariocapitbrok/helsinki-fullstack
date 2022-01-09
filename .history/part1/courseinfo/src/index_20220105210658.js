// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

const arto = {
  name: 'Arto Hellas',
  greet: function () {
    console.log('hello, my name is ' + this.name)
  },
}

setTimeout(arto.greet.bind(arto), 1000)
