
import Home from './routes/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Signup from './routes/Signup';

const App = () => {
  return ( <div>

<BrowserRouter>
<Navbar/>
    <Routes>
    <Route path="/">
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Route>
    </Routes>
  </BrowserRouter>
  </div>
   );
}
 
export default App;