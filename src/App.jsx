import { BrowserRouter, Routes, Route } from "react-router"
import Omeni from "./Omeni";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Omeni />} />
      </Routes>
    
    
    </BrowserRouter>
   

    </>
  )
}

export default App
