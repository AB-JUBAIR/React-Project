
import './App.css'
import Count from './Count'
import Users from './Users'
import Friends from './Friends'
import Countries from './Components/Countries'
function App() {
  const handleClick2 = () => {
    alert("clicked button 2")
  }
  function handleClick(){
    alert('clicked buttton')
  }

  const handleClick3 = (num) => {
    alert(num + 5)
  }

  return (
    <>
<Countries></Countries>











    {/* <Users></Users> */}
    {/* <Friends> </Friends> */}
  {/* <Count> </Count> */}
      <h1>Vite + React</h1>
<button onClick={handleClick2} >Click me 12 </button>

<button onClick={handleClick}>Click me </button>
<button onClick={() => {alert("Third Clicked")}}>Click me </button>
<button onClick={() => {handleClick3(5)}}>Click me 5 </button>
    </>
  )
}

export default App
