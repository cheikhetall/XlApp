import { useNavigate,NavLink } from "react-router-dom";

 
 const Gender = () => {
    const  navigate = useNavigate();
    return (
        <div className="Gender">
         {/* <NavLink>Male</NavLink> | {" "}
         <NavLink>Female</NavLink> | {" "}
         <NavLink>Genderless</NavLink>  */}
        </div>
      );
}
 
export default Gender;