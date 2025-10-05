import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  const imgSrc = featuredImage ? appwriteService.getFilePreview(featuredImage) : '/placeholder.png'

  return (
    <Link to={`/post/${$id}`} className="block w-full">
      <div className='w-full bg-gray-100 rounded-xl p-4 flex flex-col h-full'>
        <div className='w-full mb-4 h-48 overflow-hidden rounded-md'>
          <img src={imgSrc} alt={title} className='w-full h-full object-cover' />
        </div>

        <h2 className='text-xl font-bold mt-auto'>{title}</h2>
      </div>
    </Link>
  )
}


export default PostCard