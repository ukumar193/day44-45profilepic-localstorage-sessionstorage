import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
