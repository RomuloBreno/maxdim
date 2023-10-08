import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'
import ItemCarousel from './components/item-carousel.jsx'
import ItemText from './components/item-text.jsx'
import Navbar from './menu/navbar.jsx'
import Footer from './layout/footer.jsx'
import Carousel from 'react-elastic-carousel'


function App() {

  const bek = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1980, itemToShow: 4 },
  ]
  const [count, setCount] = useState(0);
  const [itemCarousel, setItemCarousel] = useState([1, 2, 3, 4]);
  return (
    <>
      <div className='banner-home'>
        <div className="container">
          <Navbar />

        </div>


      </div>
      <div className='main'>
        <div className="container">
          <h1>Carrossel</h1><br />
          <Carousel isRTL breakPoints={bek}>
            {itemCarousel.map((item) => (
              <ItemCarousel key={item}>{item}</ItemCarousel>
            ))}
          </Carousel>

          <br />
          <br />
          <div className="container">
            <h1>Texto Exemplo</h1>
            <ItemText ></ItemText>

          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
