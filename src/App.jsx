import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleAddUser=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email};
    
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert('An User Added Successfully')
        form.reset();
      }
    })
  }
  return (
    <>
    <h1>CRUD</h1>
    <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="name" />
      <br />
      <input type="email" name="email" id="email" />
      <br />
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default App
