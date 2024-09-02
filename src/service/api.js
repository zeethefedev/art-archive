const BASE_URL = 'https://api.artic.edu/api/v1'
const IMAGE_URL = 'https://www.artic.edu/iiif/2'

export const fetchArtworks = async () => {
  const response = await fetch(`${BASE_URL}/artworks`)
  const { data } = await response.json()
  return data
}

export const fetchArtById = async (id) => {
  //https://api.artic.edu/api/v1/artworks/202823
  const response = await fetch(`${BASE_URL}/artworks/${id}`)
  const { data } = await response.json()
  return data
}

export const fetchArtworkImages = async (artworkIds) => {
  const promises = artworkIds.map(async (id) => {
    const artwork = await fetchArtById(id)
    return { [id]: artwork.image_id }
  })

  const artworks = {}
  for (const result of await Promise.all(promises)) {
    Object.assign(artworks, result)
  }
  return artworks
}

export const fetchCategories = async () => {
  //https://api.artic.edu/api/v1/categories
  const response = await fetch(`${BASE_URL}/categories`)
  const { data } = await response.json()
  return data
}

export const fetchTerms = async (term) => {
  const response = await fetch(`${BASE_URL}/${term}?limit=100`)
  const { data } = await response.json()
  return data
}

export const getImageURL = (id) => {
  //https://www.artic.edu/iiif/2/ee8c8903-ed55-c104-49d2-3bd36028d40b/full/843,/0/default.jpg
  const image = `${IMAGE_URL}/${id}/full/843,/0/default.jpg`
  return image
}

export const searchArtworks = async (q, fields, queries) => {
  //https://api.artic.edu/api/v1/artworks/search?query[term][category_ids]=PC-3
  const qString = q ? `q=${q}` : ''

  const defaultFields = ['id', 'title', 'artist_display', 'date_display', 'thumbnail']
  const fieldString =
    fields && fields.length ? `fields=${defaultFields.join(',')},${fields.join(',')}` : ''

  let queryString = ''
  const queriesExists = queries && Object.entries(queries).length
  if (queriesExists) {
    const [queryTerm] =
      queriesExists && Object.entries(queries).map(([key, value]) => `[${key}_ids]=${value}`)
    queryString = `query[term]${queryTerm}`
  }

  const searchString = `${[qString, queryString, fieldString].filter((str) => str).join('&')}`

  const response = await fetch(`${BASE_URL}/artworks/search?${searchString}`)

  const { data } = await response.json()
  return data
}
