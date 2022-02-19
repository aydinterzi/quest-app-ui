import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/users/:userId" element={<User/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
