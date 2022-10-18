import { useState } from 'react'
import Description from './components/Description'
import Image from './components/Image'

const BtnL = ({ index, setIndex }) => {
  return (
    <aside onClick={() => setIndex((current) => current - 1)} className='btnLeft'>
      <img src='../assets/arrowL.png' alt='arrow left' />
    </aside>
  )
}

const BtnR = ({ index, setIndex }) => {
  return (
    <aside onClick={() => setIndex((current) => current + 1)} className='btnRight'>
      <img src='../assets/arrowL.png' alt='arrow left' />
    </aside>
  )
}

function App() {
  const [index, setIndex] = useState(0);

  return (
    <main>
      {index === 0 &&
        <section id='carousel1'>
          <Description index={index} setIndex={setIndex} />
          <Image />
          <BtnL setIndex={setIndex} />
          <BtnR setIndex={setIndex} />
        </section>
      }
    </main>
  );
}

export default App;
