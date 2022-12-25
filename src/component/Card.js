import React from 'react'
import { MdDelete } from 'react-icons/md'

const Card = ({ title, author, comment, created, url }) => {
  return (
    <div className="card">
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='content'>
        <div>
          <h5><span>By: </span>{author}</h5>
        </div>
        <div>
          <h5><span>Comment: </span>{comment}</h5>
        </div>
      </div>
      <div className="created">
        <div>
          <p>{created}</p>
        </div>
        <div>
          <a href={url} target="_blank" rel="noopener"><button type='button'>Read More</button></a>
        </div>
        <div className='iconcontent'>
          <MdDelete className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Card
