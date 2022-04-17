import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/Pages/About/About';
import LogIn from './component/Pages/LogIn/LogIn';
import PlaceOrder from './component/Pages/PlaceOrder/PlaceOrder';
import ServicesPage from './component/Pages/ServicesPage/ServicesPage';
import SignUp from './component/Pages/SignUp/SignUp';
import RequireAuth from './component/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<ServicesPage></ServicesPage>}></Route>
        <Route path='/order' element={
          <RequireAuth>
            <PlaceOrder></PlaceOrder>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
