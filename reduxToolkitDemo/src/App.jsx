import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
    <h1 className='text-3xl text-white bg-gray-700 p-4'>React-Redux Demo App</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
