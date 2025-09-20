import React from 'react'
import { getVolBook } from '../serverBookGoogle'
import { Item, TypeBook } from '../../Types/TypesBooksGoogle';

const ViewBookGoogle = async () => {
  const inputData = await getVolBook<TypeBook>('harry potter');
  const itemsData = inputData.items
  // console.log("inputData",inputData);
  // console.log("itemsData",itemsData);

  const title = (item:Item) => {
    return item.volumeInfo.title
  }
  const pageCount = (item:Item) => {
    return item.volumeInfo.pageCount
  }
  const description = (item:Item) => {
    return item.volumeInfo.description
  }

 itemsData.map((items) => {
  console.log(title(items))
 })

  return (
    <div className='text-white'>
      <h1 className='text-white'>Component ViewBookGoogle</h1>
      {itemsData.map((items) => (
        <div key={items.id} className='border border-red-300 mt-8'>
          <h1>{title(items)}</h1>
          <h2>{pageCount(items)}</h2>
          <h3>{description(items)}</h3>
        </div>
        
      )
      )}
    </div>
  )
}

export default ViewBookGoogle