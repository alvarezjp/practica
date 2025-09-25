import React from 'react'
import { getVolBook } from '../serverBookGoogle'
import { Item, TypeBook } from '../../Types/TypesBooksGoogle'
import ViewBookGoogle from './ViewBookGoogle'


const WraperServer = async () => {
let items: Item[] = []
    try {
    const data = await getVolBook<TypeBook>('filosofia', 0, 5)
    items = data.items
  } catch (error) {
    console.error("Error cargando libros:", error)
    // opcional: puedes setear items = [] o mostrar un mensaje de error
  }

  return (
    <div>
        <h1 className='text-white'> Componente para cargar libros desde el servidor</h1>
     <ViewBookGoogle initialItems={items}/>
    </div>
  )
}

export default WraperServer