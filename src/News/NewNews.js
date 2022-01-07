import React, { useState, useEffect } from 'react'
import { NewSingle } from './NewSingle';

export const NewNews = () => {

    const [data] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-12-10&sortBy=publishedAt&apiKey=db6cc17ae2084784bd54294f72ee04f6')
          .then((response) => {
            return response.json();
          })
          .then(setData => {
            JSON.stringify(setData)
            console.log('data', setData)
           
          })
      }, []);
      return (
        <>
          <ul>
            {data.map((article, index) => (
              <NewSingle article={article} index={index} />
            ))}
          </ul>
        </>
      )
}