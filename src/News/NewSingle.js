import React from 'react'

export const NewSingle = ({item, urlToImage, title,author,description}) => {
    return (
        <li key={item.id}>
            <img src={urlToImage} />
            <p>{title}</p>
            <p>{author}</p>
            <p>{description}</p>
        </li>
    )
}