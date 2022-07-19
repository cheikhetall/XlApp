
import ScrollinBar from "../component/ScrollingBar";
import Xlmembers from "../component/Xlmembers";
import BigBar from "../component/BigBar";
import SongBox from "../component/SongBox";
import MerchBox from "../component/MerchBox";
import clothService from "../services/cloth.service";
import { useState,useEffect } from "react";
import Gender from "../component/Gender";

function Home() {
const [allClothes,setAllClothes]=useState()

useEffect(()=>{
 clothService.getAll()
 .then(res=>setAllClothes(res.data)) 
 .catch(err=>console.log(err))
},[])
  
  if(allClothes!=null)console.log(allClothes)

  return (
<div className="Home-container">
    {allClothes  && <>
  <Gender/>
     <ScrollinBar props={allClothes} />
     
     <Xlmembers />
     <BigBar/>
     <SongBox/>
     <MerchBox/>
     </>
    }
    </div>
  );
}

export default Home