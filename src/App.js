import { useState } from 'react'

import Description from './components/Description'
import Image from './components/Image'
import BtnL from './components/BtnL'
import BtnR from './components/BtnR'


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
      {index === 1 &&
        <section id='carousel2'>
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
