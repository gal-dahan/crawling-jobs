import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ByCompany from './pages/ByCompany'
import NotFound from './pages/NotFound'
import CompaniesList from './pages/CompaniesList'
import About from './pages/About'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/company/:company" 
              element={<ByCompany />} 
            />
                        <Route 
              path="/CompaniesList" 
              element={<CompaniesList />} 
            />
                        <Route 
              path="about" 
              element={<About />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

