import React, { useState, useEffect } from 'react'
import { NewSingle } from './NewSingle';

export const NewNews =  async() => {

  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-&sortBy=publishedAt&apiKey=db6cc17ae2084784bd54294f72ee04f6')
  const { articles } = await response.json()
  console.log( 'articles', articles)


  articles.map({ id, author, content, urlToImage} =>{
    return (
      <li> key={id}>
                     <img src={urlToImage} alt={title} />
                     <p>{title}</p>
                   <p>{author}</p>
                  <p>{description}</p>
                    <p>{publishdAt}</p>
                   <button href={url}>Read full article</button>
                </li>
    )
  })
  // articles.map(article=>{
  //   console.log('article', article)
  //             return (
  //             <li> key={article.id}>
  //               <img src={article.urlToImage} alt={article.title} />
  //               <p>{article.title}</p>
  //               <p>{article.author}</p>
  //               <p>{article.description}</p>
  //               <p>{article.publishdAt}</p>
  //               <button href={article.url}>Read full article</button>
  //             </li>
}

// NewNews()


  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-&sortBy=publishedAt&apiKey=db6cc17ae2084784bd54294f72ee04f6')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       JSON.stringify(data)
  //       console.log('data', data)
  //       })
  //       .then( data =>{
  //         data.articles.map(article=>{
  //           return (
  //           <li> key={article.id}>
  //             <img src={article.urlToImage} alt={article.title} />
  //             <p>{article.title}</p>
  //             <p>{article.author}</p>
  //             <p>{article.description}</p>
  //             <p>{article.publishdAt}</p>
  //             <button href={article.url}>Read full article</button>
  //           </li>
  //           )
  //       })
  //       // let aux = [];
  //       // aux.push(data)
  //       // console.log('aux' ,aux)        
  //     })
  //     .catch((error) => console.log(error))
  // }, []);
  // console.log('test', data)


//   return (
//     <>

// {/* The data is not renderred because the array is empty */}
//       {data.articles && data.articles.map((article) => {
//         console.log('data,article', article)
//         return (
//           <li key={article.id}>
//             <img src={article.urlToImage} alt={article.title} />
//             <p>{article.title}</p>
//             <p>{article.author}</p>
//             <p>{article.description}</p>
//             <p>{article.publishdAt}</p>
//             <button href={article.url}>Read full article</button>
//           </li>
//         )
//       })}
//     </>
//   )
// }