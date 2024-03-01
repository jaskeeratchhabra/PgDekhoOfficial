import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import WelcomeScreen from './screens/WelcomeScreen';
import BookingScreen from './screens/BookingScreen';
import LoginForm from './components/LoginForm';
import HomeScreen from './screens/HomeScreen';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavbarComponent />
        <Routes>
          <Route path="/" exact element={<WelcomeScreen/>}/>
          <Route path="/home" exact element={<HomeScreen/>} />
          <Route path="/book/:roomid" element={<BookingScreen/>} />
          <Route path="/register" exact element={<RegisterForm/>}/>
          <Route path="/login" exact element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
