import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminRoutes } from "./routes/AdminRoutes"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
