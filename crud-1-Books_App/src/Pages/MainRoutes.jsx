import React from 'react'
import Books from "./Books"
import EditBook from "./EditBook"
import Login from "./Login"
import SingleBook from './SingleBook'
import {Routes,Route} from "react-router-dom"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<EditBook />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books/:id/edit" element={<SingleBook />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />

    </Routes>
  )
}

export default MainRoutes