import React from 'react'

function Article(props) {
  return (
    <div>
        <article>
            <h3>{props.title}</h3>
            {props.date && props.date.length > 1 ? <small>{props.date}</small> : "January 1, 1970"}
            <p>{props.preview}</p>
        </article>
    </div>
  )
}

export default Article