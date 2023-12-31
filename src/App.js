import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Main from './pages/Main';
import Navbar from './pages/Navbar';
import Detail from './pages/Detail';
import Modal from 'react-modal';
import NoResponse from './errors/NoResponse';
import Search from './pages/Search';
import MovieGenre from './pages/MovieGenre';
import TvGenre from './pages/TvGenre';
import KidsGenre from './pages/KidsGenre';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/mypage' element={<><Navbar /><Mypage /></>} />
        <Route path='/main' element={<><Navbar /><Main /></>} />
        <Route path='/detail/:content_id' element={<><Navbar /><Detail /></>} />
        <Route path='/search/*' element={<><Navbar /><Search /></>} />
        <Route path='/tv/:genre1' element={<><Navbar /><TvGenre /></>} />
        <Route path='/movie/:genre2' element={<><Navbar /><MovieGenre /></>} />
        <Route path='/kids/:genre3' element={<><Navbar /><KidsGenre /></>} />
        <Route path='/noResponse' element={<><NoResponse /></>} />
      </Routes>
    </BrowserRouter>
  );
}
Modal.setAppElement('#root')
export default App;
