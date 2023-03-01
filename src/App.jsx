import { useState } from 'react'
import './App.css'
import Text from './components/Text'
import phrases from './data/phrases.json'
import Social from './components/Social'
import social from './data/social.json'

function App() {
  const image = ['fondo1', 'fondo2', 'fondo3', 'fondo4']
  const [img, setImg] = useState(0)
  const [index, setIndex] = useState(0)
  const [indexSocial, setIndexSocial] = useState(0)
  const changeFortune = () =>{
    
    if(img === (image.length-1)){
      setImg(0)
    }
    else{
      setImg(img+1)
    }

    if(indexSocial === (social.length-1)){
      setIndexSocial(0)
    }
    else{
      setIndexSocial(indexSocial+1)
    }

    setIndex(Math.floor(Math.random() * ((phrases.length-1) - 0 + 1) + 0))

     document.body.style.backgroundImage = `url(/${image[img]}.jpg)`;
  }
  return (
    <div className="App">
      <h1>GALLETAS DE LA <br /> FORTUNA</h1>
      <Text
      phrase = {phrases[index].phrase}
      author = {phrases[index].author}
      />
      <button onClick={changeFortune}>Probar mi suerte</button>
      <Social
      domain={social[indexSocial].domain}
      image={social[indexSocial].image}/>
    </div>
  )
}

export default App
