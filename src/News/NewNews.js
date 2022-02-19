import React, { useState, useEffect } from 'react'
import { NewSingle } from './NewSingle';

export const NewNews = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-&sortBy=publishedAt&apiKey=db6cc17ae2084784bd54294f72ee04f6')
          .then((response) => {
            return response.json();
          })
          .then(data => {
            JSON.stringify(data)
            console.log('data', data)  
            // console.log('set' , setData)        
          })
          .catch((error)=> console.log(error))
      }, []);


      
      return (
        <>
            {data.articles && data.articles.map((article) =>{
              return (
                <li key={article.id}>
                <img src={article.urlToImage}  alt={article.title} />
                <p>{article.title}</p>
                <p>{article.author}</p>
                <p>{article.description}</p>
                <p>{article.publishdAt}</p>
                <button href={article.url}>Read full article</button>
            </li>
              )
            })}
        </>
      )
}