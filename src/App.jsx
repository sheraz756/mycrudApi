import './App.css'
import About from './component/About/About'
import GetUser from './component/GetUser/GetUser'
import SingleUser from './component/GetUser/SingleUser'
// import Check from './component/Check/Check'
import Header from './component/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = ()=>{
  const myName = 'sheraz'+'shasd'
  return(
<BrowserRouter>
<Routes>
  <Route path = '/about' element={<About kuchBhi = {myName} />} />
  <Route path='/check1' element={<GetUser  />} />
  <Route path='/singleUser/:id' element={<SingleUser  />} />

  {/* <Route path = '/check' element={<Check kuchBhi = {myName} />} /> */}

</Routes>
</BrowserRouter>

  )
}

export default App