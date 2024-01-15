import  { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'

const FullPizza: FC = () => {
  
  type Pizza = {
    imageUrl: string
    title: string
    price: number
  }

  const [pizza, setPizza] = useState<Pizza>()
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://6596370c6bb4ec36ca0228a9.mockapi.io/items/${id}`)
        setPizza(data)
      } catch (err) {    
        alert('Pizza not found')
        navigate('/')
      }
    }
    fetchPizza()
  }, [])

  console.log(pizza);

  if (!pizza) {
    return <h1> 'Loading...'</h1>
  }
  
  return (
    <div>
      <h1>{ pizza.title}</h1>
      <img src={`${pizza.imageUrl}`} alt='' />
      <h1>{id}</h1>
      <p>{ pizza.price}</p>
    </div>
  )
}

export default FullPizza;
