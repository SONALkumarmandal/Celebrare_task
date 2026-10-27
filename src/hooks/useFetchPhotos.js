import { useEffect, useState } from 'react'

const PHOTOS_URL = 'https://picsum.photos/v2/list?limit=30'

function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPhotos() {
      try {
        const response = await fetch(PHOTOS_URL, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Unable to load photos (${response.status}).`)
        }

        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('The photo service returned an invalid response.')
        }

        setPhotos(data)
        console.log(data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Unable to load photos. Please try again.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchPhotos()

    return () => controller.abort()
  }, [])

  return { photos, loading, error }
}

export default useFetchPhotos
