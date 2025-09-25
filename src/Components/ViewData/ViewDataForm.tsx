
import { getDataJson } from '@/app/Server/ServerJsonServer/ReactHookForm/serverHookForm'
import { TypeData } from '@/app/Server/Types/TypeDataHookForm'

const ViewDataForm = async  () => {
    let persons:TypeData[]=[]
try{
    persons = await getDataJson();
  
}
catch(error){
    console.log('error en la adquisicion de daots',error)
}


  console.log('Datos desde persons:',persons);
  return (
    <div className='text-white'>
        <h1>Listado de personas</h1>
        {persons.map((p) => (
        <ul key={p.id} className='border-2 border-amber-600 px-2.5 my-2'>
            <li className='text-white'>{p.nombre}</li>
            <li className='text-white'>{p.email}</li>
        </ul>)
        
        )}
    </div>
  )
}

export default ViewDataForm