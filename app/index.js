import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ThemeContext from './contexts/theme.js'
import Nav from './components/Nav.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular.js'))
const Battle = React.lazy(() => import('./components/Battle.js'))
const Results = React.lazy(() => import('./components/Results'))

function App() {
   const [theme, setTheme] = React.useState('light')

   const toggleTheme = () => {
      setTheme((t) => t === 'light' ? 'dark' : 'light')
   }

   return (
      <Router>
         <ThemeContext.Provider value={{theme}}>
            <div className={theme}>
               <div className="container">
                  <Nav toggleTheme={toggleTheme}/>
                  
                  <React.Suspense fallback={<Loading />}>
                     <Switch>
                        <Route exact path='/' component={Popular} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route render={() => (<h1>404 Not Found.</h1>)} />
                     </Switch>
                  </React.Suspense>
               </div>
            </div>
         </ThemeContext.Provider>
      </Router>
   )
}

// takes two things:
//  the react element
//  where you want to render it to
ReactDOM.render(
   <App/>,
   document.getElementById('app')
)