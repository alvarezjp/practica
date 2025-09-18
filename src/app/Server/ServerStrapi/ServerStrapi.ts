const URL_API = "http://localhost:1337/api"

export const httpGet = async<T>(endopoint: string): Promise<T> => {
  const res = await fetch(`${URL_API}/${endopoint}`, {
    headers: {
      Authorization: `Bearer  ${process.env.STRAPI_API_TOKEN}`,
    }
  })
  if (!res.ok) {
    throw new Error("Falla, hay que invetiar")
  }
  return res.json()
}