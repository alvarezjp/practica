import { TypeData } from "../../Types/TypeDataHookForm";

const URL_JSON_SERVER = "http://localhost:3004/personas"

export const getDataJson = async():Promise<TypeData[]> => {
const res = await fetch (`${URL_JSON_SERVER}`)
if(!res.ok){
    throw new Error ('Error al obtener lista de personas')
}
return res.json()
}

// Metodo Post

export const postPerson = async (person:TypeData) => {
    const res = await fetch (URL_JSON_SERVER,{
        method:'POST',
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(person)
    })
if(!res.ok){
    throw new Error ("No se pudieron cargar los datos")
}

return res.json();
}
