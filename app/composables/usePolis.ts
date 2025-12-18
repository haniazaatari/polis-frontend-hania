export const usePolis = () => {
  const api = 'http://localhost:5000'

  const getHealth = async () => {
    try {
      const res = await fetch(`${api}/api/v3/health`)
      return await res.json()
    } catch (err) {
      console.error('Health check failed:', err)
      return null
    }
  }

  return {
    getHealth
  }
}
