"use client";

import React, { useEffect, useState } from 'react'
import { getVolBook } from '../serverBookGoogle'
import { Item, TypeBook, VolumeInfo } from '../../Types/TypesBooksGoogle';
import InfiniteScroll from 'react-infinite-scroll-component';

export interface Props{
    initialItems: Item[];
}

const ViewBookGoogle =  ({initialItems}:Props) => {

  const [items, setItems] = useState<Item[]>(initialItems)
  const [startIndex, setStartIndex] = useState(initialItems.length)
  const [hasMode, setHasMore] = useState(true)

  console.log("Estos son los elementos de entrada",initialItems);

  // const inputData = await getVolBook<TypeBook>('harry+potter',startIndex,5);
  // const itemsData = inputData.items

  const fetchData = async () => {
    const inputData = await getVolBook<TypeBook>('filosofia', startIndex,5);
    if (!inputData.items || inputData.items.length === 0) {
      setHasMore(false)
      return;
    }

    setItems((prev) => [...prev, ...inputData.items]);
    setStartIndex((prev) => prev + 5)
    // console.log(items);
  }

 

console.log('esto son los items que tengo',items)

  const typeInfo = <K extends keyof VolumeInfo>(item: Item, key: K): VolumeInfo[K] => {
    return item.volumeInfo[key]
  }

  return (
    <div className='text-white'>
      <h1 className='text-white'>Component ViewBookGoogle</h1>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMode}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
        {items.map((items) => (
          <div key={items.id} className='border border-red-300 mt-8 h-[150px]'>
            <h1>{typeInfo(items, 'title')}</h1>
            <h2>{typeInfo(items, 'pageCount')}</h2>
            <h3>{typeInfo(items, 'description')}</h3>
          </div>

        )
        )}
      </InfiniteScroll>

      {/* {itemsData.map((items) => (
        <div key={items.id} className='border border-red-300 mt-8'>
          <h1>{typeInfo(items, 'title')}</h1>
          <h2>{typeInfo(items, 'pageCount')}</h2>
          <h3>{typeInfo(items, 'description')}</h3>
        </div>

      )
      )} */}

    </div>
  )
}

export default ViewBookGoogle