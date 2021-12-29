import React from 'react'
import NewSingle from './NewSingle'

export const News = () =>{

     function Constructor (props){
         super(props);
         this.state= {
             news: [],
         };
     }
     function FetchMethod(){
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db6cc17ae2084784bd54294f72ee04f6';

        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            this.setState({
                news: data.articles
            })
        })
        .catch((error)=> console.log(error));
     };

    function renderItems (){
        return (
            state.news.map((item)=>{
                <NewSingle key={item.id} item={item} />
            })
        )
    }
    return (
        <ul>
            {renderItems()}
        </ul>
    )
}