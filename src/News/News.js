import React from 'react'
import NewSingle from './NewSingle'

export const News = () =>{
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