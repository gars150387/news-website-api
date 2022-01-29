import React, { useState, useEffect } from 'react'
import { NewSingle } from './NewSingle';

export const NewNews = () => {

    const [setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-01-01&sortBy=publishedAt&apiKey=db6cc17ae2084784bd54294f72ee04f6')
          .then((response) => {
            return response.json();
          })
          .then(setData => {
            JSON.stringify(setData)
            console.log('data', setData)           
          })
          .catch((error)=> console.log(error))
      }, []);
      return (
        <>
          <ul>
            {setData.articles && setData.articles.map((article, index) => (
              <NewSingle article={article} index={index} />
            ))}
          </ul>
        </>
      )
}