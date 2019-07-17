import React from 'react'

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

export default class Popular extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         selectedLanguage : 'All'
      };

      this.updateLanguage = this.updateLanguage.bind(this);
   }
   
   updateLanguage(selectedLanguage) {
      this.setState({
         selectedLanguage : selectedLanguage
      })
   }

   render() {
      const { selectedLanguage } = this.state
      return (
         <React.Fragment>
            <LanguagesNav
               selected={selectedLanguage}
               onUpdateLanguage={this.updateLanguage}>
            </LanguagesNav>
         </React.Fragment>
      )
   }
}