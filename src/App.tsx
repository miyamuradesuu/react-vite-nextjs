// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>hello world with React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//       <div>

//       </div>
//       <ul>
//         <li>Todo 1</li>
//         <li>Todo 2</li>
//         <li>Todo 3</li>
//         <br />
//       </ul>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import InputTodo from "./todo/input.todo";


function App() {

  const [listTodo, setListTodo] = useState(
    ["todo 1", "todo 2", "todo 3"]
  )

  const handleTest = (name: string) => {
    alert(`handle test with name = ${name}`)
  }

  return (
    <div>
      <InputTodo
        // props -> passing function từ cha sang con
        ericFunction={handleTest}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
      <br />
      <ul>
        {listTodo.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}
export default App;