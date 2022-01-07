import React from 'react'

export const NewSingle = ({ item, urlToImage, title, author, description, url, publishdAt }) => {
    return (
        <div>
            <li key={item.id}>
                <img src={urlToImage} />
                <p>{title}</p>
                <p>{author}</p>
                <p>{description}</p>
                <p>{publishdAt}</p>
                <button href={url}>Read full article</button>
            </li>
        </div>
    )
}