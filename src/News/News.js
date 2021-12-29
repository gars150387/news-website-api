import React from 'react'
import NewSingle from './NewSingle'

export const News = () =>{

     function Constructor (props){
         super(props);
         this.state= {
             news: [],
         };
     }

    function renderItems (){
        return (
            items.map((item)=>{
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