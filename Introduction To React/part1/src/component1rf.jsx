import React from 'react';
import ReactDOM from 'react-dom'

const Hello = ({name,age}) => {
    const bornYear = () => 
        new Date().getFullYear() - age
    
return (
  <div>
    <p>
      Hello {name}, you are {age} years old!
    </p>
    <p>You were probably born in {bornYear()}</p>
  </div>
)
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name ={name} age={age}/>   
      <Hello name="Maya" age={14+20}/>  
    </div> 

  )
}

ReactDOM.render(<App />, document.getElementById('root'))