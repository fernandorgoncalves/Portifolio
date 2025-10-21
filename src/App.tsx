import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {

  return (
    <>
         <Router>
      <Routes>
        <Route path="/" element={<>HOME</>} />
        <Route path="/projetos" element={<>PROJETOS</>} />
        <Route path="/tecnologia" element={<>TECNOLOGIA</>} />
        <Route path="/sobremim" element={<>SOBREMIM</>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
