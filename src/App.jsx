import Button from './component/Button/Button'
import Heading from './component/Heading/Heading'
import styles from './App.module.css' 

function App() {
  return (
    <div>
      <img
      src="./src/assets/image.jpeg"
      width="100"
      height="150"
      id="special"
      />
      <Button
      label="click me"
      id="special"
      />
      <Button
      label="submit"
      id="something else"
      />
      <h2 className="hola">Hello</h2>
      <Heading 
      items={[1,2,3]}/>
      <Button />
      <Button />
      <Button />
      <h3 className="hi">How are you?</h3>   
      <Heading
      items={['hello','hi']}/>  
    </div>
  )

  
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
