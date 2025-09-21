import React from 'react'
import { getVolBook } from '../serverBookGoogle'
import { TypeBook } from '../../Types/TypesBooksGoogle'
import ViewBookGoogle from './ViewBookGoogle'


const WraperServer = async () => {

    const data = await getVolBook<TypeBook>('filosofia', 0,5)

  return (
    <div>
        <h1 className='text-white'> Componente para cargar libros desde el servidor</h1>
     <ViewBookGoogle initialItems={data.items}/>
    </div>
  )
}

export default WraperServer