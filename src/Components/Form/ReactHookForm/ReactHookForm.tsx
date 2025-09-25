'use client'
import { postPerson } from '@/app/Server/ServerJsonServer/ReactHookForm/serverHookForm'
import { TypeData } from '@/app/Server/Types/TypeDataHookForm'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'



const ReactHookForm = () => {
 

  const onSubmit:SubmitHandler<TypeData> = async (data) => {
    try{
      const added = await postPerson(data)
      console.log("Persona agregada",added);
    }catch(error){
      console.log("la carga de datos mostro error:",error)
    }
    reset()
  }

  const schema = yup.object({
    nombre:yup.string().required("El nombre es necesitado por dios "),
    email:yup.string().required("El email es requerido"),
    telefono:yup.number().min(1000000, "El número es demasiado corto")
  .max(99999999, "El número es demasiado largo")
  .required("El teléfono es obligatorio"),
    direccion:yup.string().required("La direccion es requerido"),
  }).required()

 const { register,handleSubmit,formState:{errors},reset} = useForm<TypeData>({resolver:yupResolver(schema)})

  return (
    <div className='text-white'>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label className="block text-sm/6 font-medium text-white">
            nombre
          </label>
          <input type='text' {...register("nombre",{required:"El nombre es requerido"})} 
          className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6' />
          {errors.nombre && <p className='text-red-500'>{errors.nombre.message}</p>}
        </div>
        <div>
          <label  className="block text-sm/6 font-medium text-white">
            direccion
          </label>
          <input type='text' {...register("direccion")} className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6' />
        </div>
        <div>
          <label  className="block text-sm/6 font-medium text-white">
            email
          </label>
          <input type='email' {...register("email")} className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6' />
        </div>
        <div>
          <label  className="block text-sm/6 font-medium text-white">
            telefono
          </label>
          <input type='number' {...register("telefono")} className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6' />
          {errors.telefono && <p className='text-red-500'>{errors.telefono.message}</p>}
        </div>


        <button type='submit' className='border-2 border-blue-500 rounded-sm bg-blue-400 p-[5px] mt-2.5 cursor-pointer'>Enviar</button>
      </form>
    </div>
  )
}

export default ReactHookForm