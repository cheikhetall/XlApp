
import Navbar from "../component/ScrollingBar";
import Xlmembers from "../component/Xlmembers";
import BigBar from "../component/BigBar";
import SongBox from "../component/SongBox";
import MerchBox from "../component/MerchBox";
function Home() {
  return (
    <div className="Home-container">
     <Navbar/>
     <Xlmembers/>
     <BigBar/>
     <SongBox/>
     <MerchBox/>
 
    </div>
  );
}

export default Home