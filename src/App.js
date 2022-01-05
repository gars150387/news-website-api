import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-12-05&sortBy=publishedAt&apiKey=db6cc17ae2084784bd54294f72ee04f6')
      .then((response) => {
        return response.json();
      })
      .then(setData => {
        JSON.stringify(setData)
        console.log('data', setData)
        Object.values(setData.articles)
        console.log('data2', setData)
      })
  }, []);
  return (
    <>
      <ul>
        {data.map((article, index) => (
          <li key={article.id} article={article} index={index}>{article.title}</li>
        ))}
      </ul>
    </>
  )


}

export default App;
