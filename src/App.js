import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
//import Signup from './pages/Signup';
import Main from './pages/Main';
import Navbar from './pages/Navbar';
import Detail from './pages/Detail';
import Modal from 'react-modal';
import Mood from './pages/Mood';
import Genre from './pages/Genre'
import NoResponse from './errors/NoResponse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/mypage' element={<><Navbar /><Mypage /></>} />
        <Route path='/main' element={<><Navbar /><Main /></>} />
        <Route path='/detail/:content_id' element={<><Navbar /><Detail /></>} />
        <Route path='/main/:mood' element={<><Navbar /><Mood /></>} />
        <Route path='/genres/:genre' element={<><Navbar /><Genre /></>} />

        <Route path='/noResponse' element={<><NoResponse /></>} />
      </Routes>
    </BrowserRouter>
  );
}
Modal.setAppElement('#root')
export default App;
