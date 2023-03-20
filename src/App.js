import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './component/home';
import SignUp from './component/signUp';
// import Dropdown from './component/Dropdown';
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
