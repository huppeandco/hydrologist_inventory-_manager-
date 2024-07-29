import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';




export const LangContext = createContext();

const apiUrl = 'https://thehydrologist.com/api/get-page.php';
const LangProvider = ({ children }) => {
    const [lang, setLang ] = useState('eng');
    const [pagestxt, setpagestxt] = useState(
         {header: {}, home: {}, about: {}, contact: {}}

    )
    useEffect(() => {
       
    
        axios.get(apiUrl, {
          params: {
            pageName: 'header',
            lang: lang
          }
        })
        .then(response => {
            let edit = {...pagestxt};
            edit.header = response.data
            setpagestxt(edit);
            
          
        })
        .catch(error => {
          console.error('Error retrieving page data:', error);
        });
      }, []);

      useEffect(() => {
        axios.get(apiUrl, {
            params: {
              pageName: 'header',
              lang: lang
            }
          })
          .then(response => {
              let edit = {...pagestxt};
              edit.header = response.data
              setpagestxt(edit);
              
            
          })
          .catch(error => {
            console.error('Error retrieving page data:', error);
          });
      }, [lang])
return (
    <LangContext.Provider value={{header: pagestxt.header, setLang, lang}}>
        {children}
    </LangContext.Provider>
)

}

export default LangProvider;