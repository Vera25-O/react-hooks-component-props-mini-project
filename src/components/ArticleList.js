import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

function ArticleList() {
  return (
    <div>
      <main>
        
          <Article title={blogData.title}/> 
        <Article date={blogData.date}/> 
        <Article preview={blogData.preview}/>
        
</main>
    </div>
  )
}

export default ArticleList