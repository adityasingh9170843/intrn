
import './App.css'
import ViewItems from './pages/ViewItems'
import AddItems from './pages/Additems'
import {Link} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    <div style={{display:"flex",gap:"20px", backgroundColor:"black",padding:"10px"}}>
      <Link style={{textDecoration:"none",color:"white", backgroundColor:"blue",padding:"10px"}} to ="/">View Items</Link>
      <Link style={{textDecoration:"none" ,color:"white",backgroundColor:"blue",padding:"10px"}}  to ="/add">Add Items</Link>
    </div>
     <Routes>
        <Route path='/' element={<ViewItems/>}/>
        <Route path='/add' element={<AddItems/>}/>
     </Routes>
    </>
  )
}

export default App
