import React from 'react'

function About(props) {
  return (
    <div>
        <aside>

        {props.image && props.image.length > 1 ? <img src={props.image} alt='blog logo'/> : <img src='https://via.placeholder.com/215' alt='blog logo'/>}
        
            <p>{props.about}</p>
        </aside>
    </div>
  )
}

export default About;