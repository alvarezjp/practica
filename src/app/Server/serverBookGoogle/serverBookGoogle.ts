const URL_VOLUMEN = "https://www.googleapis.com/books/v1/volumes?q="

export const getVolBook = async <T> (search:string,index=0,maxResults=5): Promise <T> =>  {
const res = await fetch (`${URL_VOLUMEN}${search}&startIndex=${index}&maxResults=${maxResults}`);
if (!res.ok){
    throw new Error('Falla de comunicacion con servidor')
}
return res.json()
}