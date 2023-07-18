import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabler from './components/Tabler';
import Inserter from './components/Inserter';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UpdForm from './components/UpdForm';
import Searcher from './components/Searcher';

function App() {
  const [data,setData] = useState([]) //declaration of state for data
  const [ndata,SetNdata] = useState([])
  const [change,setChange] = useState(false)
  useEffect(()=>{                     //this function is used to render the screen with new data
    const getTables= async () =>{
      const dataFromServer = await fetchTable()
      setData(dataFromServer)
    }
    getTables()
  },[change]) 
  
  const fetchTable= async ()=>{
    const res = await fetch('http://localhost:5000/adbk')
    const data = await res.json()
    return data
  }

  const searchTable= async (id,val)=>{
    const res = await fetch(`http://localhost:5000/adbk/${id}/${val}`)
    const data = await res.json()
    SetNdata(data);
  }

  const addDetails = async (details) =>{    //function to POST the card details to json
    const res = await fetch('http://localhost:5000/adbk',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(details)
    })
    const resp = await res.json()
    setData([...data, resp])
  }

  const UpdateDetails = async (details,id) =>{    //function to POST the card details to json
    const res = await fetch(`http://localhost:5000/adbk/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(details)
    })
    const resp = await res.json()
    setData([...data, resp])
  }

  const deleteDetails = async (id)=>{    //the method for deleting json data

    await fetch(`http://localhost:5000/adbk/${id}`,
    {method: 'DELETE'})
    setData(data.filter((val)=> val.id !==id,
    console.log(id)
    ))
}

  return (
    <>
    
    
    
    <Router>
          
          <NavBar/>
          <br></br>
          
          <Routes>
          
          <Route exact path='/' element={<Tabler data={data} clear={deleteDetails}/>}/>

          <Route path='/insert' element={<Inserter adder={addDetails}/>}/>

          <Route path='/update' element={<UpdForm upder={UpdateDetails} setChange={setChange}/>}/>

          <Route path='/search' element={<Searcher ndata={ndata}search={searchTable}/>}/>
          
          </Routes>
          </Router>
        
    </>
  )
}

export default App
