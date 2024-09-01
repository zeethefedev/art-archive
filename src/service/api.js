const BASE_URL = 'https://api.artic.edu/api/v1'
const IMAGE_URL = 'https://www.artic.edu/iiif/2'

export const fetchArtwork = async () => {
  const response = await fetch(`${BASE_URL}/artworks`)
  const { data } = await response.json()
  return data
}

export const fetchArtById = async (id) => {
  //https://api.artic.edu/api/v1/artworks/202823
  const response = await fetch(`${BASE_URL}/artworks/${id}`)
  const data = await response.json()
  return data
}

export const fetchCategories = async () => {
  //https://api.artic.edu/api/v1/categories
  const response = await fetch(`${BASE_URL}/categories`)
  const { data } = await response.json()
  return data
}

export const getImageURL = (id) => {
  //https://www.artic.edu/iiif/2/ee8c8903-ed55-c104-49d2-3bd36028d40b/full/843,/0/default.jpg
  const image = `${IMAGE_URL}/${id}/full/843,/0/default.jpg`
  return image
}

export const searchArt = async (queryString) => {
  //https://api.artic.edu/api/v1/artworks/search?q=monet
  const response = await fetch(`${BASE_URL}/artworks/search?q=${queryString}`)
  const { data } = await response.json()
  return data
}
