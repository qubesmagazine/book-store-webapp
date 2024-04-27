import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Home, CreateBook, DeleteBook, Editbook, ShowBook} from './pages/index'



function App() {
  return (
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/create" element={<CreateBook/>}/>
  <Route path="/delete/:id" element={<DeleteBook/>}/>
  <Route path="/edit/:id" element={<Editbook/>}/>
  <Route path="/details/:id" element={<ShowBook/>}/>
</Routes>
  )
}

export default App