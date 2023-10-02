import data from './data.json'

import { PriceCard } from "./components/PriceCard"

import bgTop from "./assets/background/bg-top.svg"
import bgBottom from "./assets/background/bg-bottom.svg"
import { useRef, useState } from 'react'

function App() {

  const [ priceType, changePriceType ] = useState(1)
  const typeRef = useRef()
  const priceRefs = [ useRef(), useRef(), useRef() ]

  const changePriceTypeFunction = () => {
    const priceTypeFunctionVariable = typeRef.current.checked

    priceRefs.forEach(price => {
        price.current.classList.remove('priceAnimationClass');
        price.current.offsetWidth; 
        price.current.classList.add('priceAnimationClass');
    });
    
    setTimeout( () => {
      changePriceType( priceTypeFunctionVariable ? 0 : 1  ) 
    }, 250)
  }

  return (
    <>
      <img src={bgTop} id="bgTop"/>
      <img src={bgBottom} id="bgBot"/>

      <span id='pricingTitle'>Our Pricing</span>
      <div id='pricingType'> 
        Annually
        <label id='pricingTypeSwitchBox'>
          <input onChange={ changePriceTypeFunction } ref={typeRef} type="checkbox"/>
          <div> </div>
        </label>
        Monthly 
      </div>
   
      <div id="priceCards">
        <PriceCard cardType="1" price={data.prices[priceType].basic } priceRef={priceRefs[0]} data={data.data[0]} />
        <PriceCard cardType="0" price={data.prices[priceType].master } priceRef={priceRefs[1]} data={data.data[1]}/>
        <PriceCard cardType="1" price={data.prices[priceType].professional } priceRef={priceRefs[2]} data={data.data[2]}/>
      </div>
   
   
    </>
  )
}

export default App


// inputRef = useRef()

// <input id = "fname" ref = {ref => inputRef.current.fname = ref} />
// <input id = "lname" ref = {ref => inputRef.current.lname = ref} />
// <input id = "email" ref = {ref => inputRef.current.email = ref} />
