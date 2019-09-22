import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import Card from './Card';
import Loading from './Loading';
import Tooltip from './Tooltip';

function LanguagesNav({ selected, onUpdateLanguage }) {
   const languages = [
      "All", "JavaScript", "Ruby", "Java", "CSS", "Python"
   ];

   return (
      <ul className="flex-center">
         {
            languages.map((language) => {
               return(
                  <li key={language}>
                     <button 
                     className="btn-clear nav-link"
                     style={ language === selected ? { color: 'rgb(35, 156, 196)' } : null }
                     onClick={ () => onUpdateLanguage(language) }>
                        {language}
                     </button>
                  </li>
               )
            })
         }
      </ul>
   )
}

LanguagesNav.propTypes = {
   selected : PropTypes.string.isRequired,
   onUpdateLanguage : PropTypes.func.isRequired
}

const initialReposState = {
   loading : true,
   repos : null,
   error : null
}

function reposReducer(state, action) {
   const {type, repos, error} = action
   console.log(type)
   switch(type) {
      case 'loading':
         return { loading : true}
      case 'display':
         return { loading : false, repos : repos, error : null }
      case 'error':
         return { loading : false, repos : null, error : error}
      default:
         throw new Error("A problem occurred while reducing the repos, please help.")
   }
}

function ReposGrid({language}) {
   const [state, dispatch] = React.useReducer(reposReducer, initialReposState)
   const { loading, repos, error } = state

   React.useEffect(() => {
      dispatch({type:'loading'})
      fetchPopularRepos(language)
         .then((r) => dispatch({type : 'display', repos : r}))
         .catch(({message}) => dispatch({type : 'error', error : message}))
   }, [language])

   if ( loading ) {
      return <Loading text="Fetching Ze Repos" />
   }

   if ( error ) {
      return <div className="error center-text">{error}</div>
   }

   return (
      <ul className='grid space-around'>
         {repos.map((repo, index) => {
            const {name, owner, html_url, stargazers_count, forks, open_issues} = repo;
            const {login, avatar_url} = owner;

            return (
               <li key={html_url}>
                  <Card 
                     header={`#${index + 1}`}
                     avatar={avatar_url}
                     href={html_url}
                     name={login}
                  >
                     <ul className='card-list'>
                        <li>
                           <Tooltip text="Github username">
                              <FaUser color='rgb(35, 156, 196)' size={22} />
                              <a href={`https://github.com/${login}`}>
                                 {login}
                              </a>
                           </Tooltip>
                        </li>
                        <li>
                           <FaStar color='rgb(35, 156, 196)' size={22} />
                           {stargazers_count.toLocaleString()} stars
                        </li>
                        <li>
                           <FaCodeBranch color='rgb(35, 156, 196)' size={22} />
                           {forks.toLocaleString()} forks
                        </li>
                        <li>
                           <FaExclamationTriangle color='rgb(35, 156, 196)' size={22} />
                           {open_issues.toLocaleString()} issues
                        </li>
                     </ul>
                  </Card>
               </li>
            )
         })}
      </ul>
   )
}

ReposGrid.propTypes = {
   language : PropTypes.string.isRequired
}

export default function Popular() {
   const [selectedLanguage, setSelectedLanguage] = React.useState('All')
   
   return (
      <React.Fragment>
         <LanguagesNav
            selected={selectedLanguage} 
            onUpdateLanguage={(language) => setSelectedLanguage(language)}
         />
         <ReposGrid language={selectedLanguage} />
      </React.Fragment>
   )
}
