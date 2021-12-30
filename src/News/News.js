import React, { useState } from 'react'
import { NewSingle } from './NewSingle'

export const News = () => {
    let news = null

    state = {
    news: []
}
const [state, setState] = useState(state)

    function FetchMethod() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db6cc17ae2084784bd54294f72ee04f6';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));
    };

    <div>
        {news.map((item) => {
            <NewSingle key={item.id} item={item} />
        })}
    </div>

    return (
        <ul>
            {News()}
        </ul>
    )
    
}