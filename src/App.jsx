import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'
import Items from './components/item-carousel.jsx'
import Navbar from './menu/navbar.jsx'
import Carousel from 'react-elastic-carousel'


function App() {

  const bk = [
    // {width:1, itemToShow:1},
    // {width:550, itemToShow:2, itemToScroll:2},
    // {width:768, itemToShow:3},
//    {width:1200, itemToShow:4},
  ]
  const [count, setCount] = useState(0);
  const [items, setItem] = useState([3,2,1]);
  return (
    <>
    <div className='banner-home'>
    <Navbar/>      

    </div>
      <div className='main'>
        <h1>Carrossel</h1><br/>
        <Carousel isRTL breakPoints={bk}>
      {items.map((items) => (
        <Items key={items}>{items}</Items>
      ))}
          
        </Carousel>
      <div className="carrossel-home">
        
      </div>
      </div>
    </>
  )
}

export default App
