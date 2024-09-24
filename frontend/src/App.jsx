import { BrowserRouter, Routes, Route } from "react-router-dom"

import { PostEdit } from "./pages/PostEdit"
import { TourismIndex } from "./pages/TourismIndex"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tourism/new-post" element={<PostEdit />} />
        <Route path="/tourism" element={<TourismIndex />} />
        <Route path="/tourism/:id" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
