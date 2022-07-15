import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

function ArticleList() {
  return (
    <div>
      <main>
<Article title={blogData.title} date={blogData.date} preview={blogData.posts.preview}/>
</main>
    </div>
  )
}

export default ArticleList