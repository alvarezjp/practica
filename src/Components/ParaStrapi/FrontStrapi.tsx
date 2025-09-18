import { httpGet } from '@/app/Server/ServerStrapi/ServerStrapi'
import { Article, StrapiType } from '@/app/Server/Types/Types';
import React from 'react'

const FrontStrapi =async () => {
    const post = await httpGet<StrapiType<Article>>("articles");
    const objet = post.data
  return (
  <div>

    <div className='text-white'>FrontStrapi</div>
    {
      objet.map((item) =>(
        <ul key={item.id} className='border-2 border-amber-300'>
          <li className='text-white'>{item.title}</li>
          <li className='text-white'>{item.description}</li>
          <li className='text-white'>{item.id}</li>
          <li className='text-white'>{item.slug}</li>
        </ul>
      ) )
    }
  </div>
  
  )
}

export default FrontStrapi