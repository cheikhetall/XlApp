
import Home from './routes/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Signup from './routes/Signup';
import Addclothe from './adminComponent/Addclothe';

const App = () => {
  return ( <div className="mainDiv">

<BrowserRouter>
<Navbar/>

    <Routes>
    <Route path="/">
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/Seasonnals" element={<Addclothe/>}></Route>
    </Route>
    <Route path='*' element={
                <main>
                  <p>there is nothing here!</p>
                </main>} 
              />
    </Routes>
  </BrowserRouter>
  </div>
   );
}
 
export default App;