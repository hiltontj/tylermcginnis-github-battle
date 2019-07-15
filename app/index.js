import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular.js'

class App extends React.Component {
   render() {
      const name = "Trevor";

      return (
         <div className="container">
            <Popular />
         </div>
      )
   }
}

// takes two things:
//  the react element
//  where you want to render it to
ReactDOM.render(
   <App/>,
   document.getElementById('app')
)