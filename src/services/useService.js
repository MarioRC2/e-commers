import axios from 'axios'

const getDatas = async () => {
  try {
    const response = await axios.get('http://localhost:3000/items')
    return response
  } catch (error) {
    throw Error(error)
  }
}

export { getDatas }
