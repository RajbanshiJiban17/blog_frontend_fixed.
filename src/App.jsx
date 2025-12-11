
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SingleBlog from './pages/SingleBlog'
import CreateBlogs from './pages/CreateBlogs'
import EditBlog from './pages/EditBlog'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<CreateBlogs />} />
      <Route path='/blog/:id' element={<SingleBlog />} />
      <Route path='/edit/:id' element={<EditBlog />} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
