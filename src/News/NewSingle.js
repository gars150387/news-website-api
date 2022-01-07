import React from 'react'

export const NewSingle = ({ id, urlToImage, title, author, description, url, publishdAt }) => {
    return (
        <div>
            <li key={id}>
                <img src={urlToImage}  alt={title} />
                <p>{title}</p>
                <p>{author}</p>
                <p>{description}</p>
                <p>{publishdAt}</p>
                <button href={url}>Read full article</button>
            </li>
        </div>
    )
}