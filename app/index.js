import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular.js'
import Battle from './components/Battle.js'
import { ThemeProvider } from './contexts/theme.js'
import Nav from './components/Nav.js'

class App extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         theme : 'light',
         toggleTheme : () => {
            this.setState(({ theme }) => ({
               theme : theme === 'light' ? 'dark' : 'light'
            }))
         }
      }
   }
   render() {
      const name = "Trevor";

      return (
         <ThemeProvider value={this.state}>
            <div className={this.state.theme}>
               <div className="container">
                  <Nav />
                  <Battle />
               </div>
            </div>
         </ThemeProvider>

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