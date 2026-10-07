import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// DOM Elements
// function App() {
//   const name = 'Ram';
//   const elements = <h1>Good Morning {name} </h1>;
//   return (
//     // <h1>welcome {name}</h1>
//     <div>
//       {elements}
//     </div>
//   )
// }

function Welcome() {
  return (
    <h1>This is Function Component</h1>
  )
}

function App() {
  return (
    <Welcome />
  );
}

export default App
