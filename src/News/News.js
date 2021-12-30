import React from 'react'
import { NewSingle } from './NewSingle'

export const News = () => {

function State(){
    let news = []
    return(
        State={
            news: news
        }
    )
}

    function FetchMethod() {
        let news = []
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db6cc17ae2084784bd54294f72ee04f6';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles,
                    
                })
                console.log(news)
            })
            .catch((error) => console.log(error));
            {news.map((item) => {
                <NewSingle key={item.id} item={item} className="col s8" />
            })}
    
    };

    // <div>
    //     {news.map((item) => {
    //         <NewSingle key={item.id} item={item} />
    //     })}
    // </div>

    return (
        <ul>
            {News()}
        </ul>
    )
    
}