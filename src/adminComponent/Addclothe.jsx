import {useFormik} from "formik"
import { useState } from "react";
import clothService from "../services/cloth.service";

const Addclothe = () => {

   let [cloth,setCloth]=useState()
   console.log(cloth)
    const formik=useFormik({
        initialValues:{
            text:"",
            seasons:"Spring" ,
            gender:"Men",
            type:"Jeans and Shorts",
            discount:0,

        },
        onSubmit:(values)=>{
           console.log(values.text,'myboy')

  const data=new FormData();
  data.append("text",values.text)
  data.append("seasons",values.seasons)
  data.append("gender",values.gender)
  data.append("type",values.type)
  data.append("discount",values.discount)
  data.append("file",cloth)
  console.log(data)


    // const data = {
    //  text:values.text,
    //  cloth:cloth,
    //  seasons:values.seasons,
    //  gender:values.gender,
    //  type:values.type,
    //  discount:values.discount
    // };
    clothService.create(data)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
    }
    
    })
  //  console.log(formik.values)
    return (
    <div>
<form onSubmit={formik.handleSubmit}>
   <input
   name="cloth"
   id="cloth"
    // onChange={formik.handleChange}
    onChange={(e)=>{
const files=e.target.files[0]
setCloth(files)
    }}
    type="file" 
    /> 
   <input 
    id="text"
    name="text"
    placeholder="text"
    type="text"
    onChange={formik.handleChange}
    value={formik.values.text}
     />
       <select value={formik.values.gender}   onChange={formik.handleChange} name="gender" id="gender">
     <option value="Men">Men</option>
     <option value="Women">Women</option>
     <option value="Genderless">Genderless</option>
     </select>
   
     <select value={formik.values.seasons}   onChange={formik.handleChange} name="seasons" id="seasons">
     <option value="Spring">Spring</option>
     <option value="Summer">Summer</option>
     <option value="Fall">Fall</option>
     <option value="Winter">Winter</option>
     </select>

     <select
      value={formik.values.type}
      name="type"
      onChange={formik.handleChange}
       id="type">
     <option value="Jeans and Shorts">Jeans and Shorts</option>
     <option value="Tops and Jackets">Tops and Jacket</option>
     <option value="Shoes and Accessories">Shoes and Accessories</option>
     </select>

    

     <input
       onChange={formik.handleChange}
     value={formik.values.discount}
     type="number"
     min="0"
     max="100"
     id="discount"
     name="discount"
     placeholder="discount"
     />
     <button type="submit">submit</button>
</form>
    </div>
    );
}
 
export default Addclothe;