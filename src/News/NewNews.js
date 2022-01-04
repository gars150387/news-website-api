import React from 'react'
import { NewSingle } from './NewSingle';

export const NewNews = ()=>{

    let state = {
        news: []
    };

    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-03&sortBy=publishedAt&apiKey=db6cc17ae2084784bd54294f72ee04f6';

    fetch(url)
    .then((response)=>{
        return response.json();
    })
  .then ((data)=>{
      state.news.push(data.articles)
      console.log('data', data)
      console.log('news', state.news)
  })
    .catch((error)=> console.log(error))
    return (
        <>
        {state.news.map((item)=>{
            return(
                <div>
                    <li>
                        {item.title}
                    </li>
                </div>
            )
        })}
        </>
    )
}