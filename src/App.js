import ResponsiveAppBar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
