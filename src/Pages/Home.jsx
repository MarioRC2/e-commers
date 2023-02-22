import { useState, useEffect } from 'react'
import { getDatas } from '../services/useService'
import '@/components/Header/Header.scss'

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getDatas()
      .then((res) => {
        setItems(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <div className='d-flex flex-row flex-wrap header column-gap'>

        {items.map((res) => (
          <div className='card' style={{ width: '18rem' }} key={res.id}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={res.image} alt={res.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{res.product_name}</h5>
              <p className='card-text'>{res.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

//   <div className='wrapper'>
//     {items.map(res => <img key={res.id} src={res.image} />)}
//   </div>
// )

export default Home
