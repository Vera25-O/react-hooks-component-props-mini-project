import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

function ArticleList() {
  return (
    <div>
<Article title={blogData.title} date={blogData.date}/>
    </div>
  )
}

export default ArticleList